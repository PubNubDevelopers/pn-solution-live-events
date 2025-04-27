package com.pubnub.demos.liveevents

import android.app.NotificationChannel
import android.app.NotificationManager
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import android.util.Log
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.WindowInsets
import androidx.compose.foundation.layout.asPaddingValues
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.statusBars
import androidx.compose.foundation.layout.wrapContentSize
import androidx.compose.material.icons.filled.Menu
import androidx.compose.material.icons.filled.Search
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.mutableStateOf
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.google.firebase.installations.FirebaseInstallations
import com.google.firebase.messaging.FirebaseMessaging
import com.pubnub.api.PubNub
import com.pubnub.api.UserId
import com.pubnub.api.enums.PNPushType
import com.pubnub.api.v2.PNConfiguration
import com.pubnub.demos.liveevents.ui.theme.LiveEventsDemosTheme
import org.greenrobot.eventbus.EventBus
import org.greenrobot.eventbus.Subscribe
import org.greenrobot.eventbus.ThreadMode
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.RequestBody.Companion.toRequestBody
import okhttp3.MediaType.Companion.toMediaType
import org.json.JSONObject
import java.io.IOException


class MainActivity : ComponentActivity() {
    private lateinit var pubnub: PubNub
    private lateinit var pushChannel: String
    private val logTag = "PNLiveEvents"
    private var pushNotificationPermission = true
    val successfullyRegistered = mutableStateOf(false)
    private val pushNotificationPermissionLauncher = registerForActivityResult(
        ActivityResultContracts.RequestPermission()
    ) { granted ->
        if (!granted) {
            Log.e(
                logTag,
                "Notification permissions were not granted.  Please grant through Android settings"
            )
            pushNotificationPermission = false
        }
    }
    private val client = OkHttpClient()
    private val JSON = "application/json; charset=utf-8".toMediaType()
    //  This is NOT the recommended way for most PubNub developers to specify the user ID - you should use an ID that is uniquely tied to the device or user.  I am just using a random ID for expediency
    private val tempUserId = "pn-emulator${(10000..99999).random()}"

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val subscribeKey =
            applicationContext.getSharedPreferences("prefs.db", 0).getString("subscribeKey", null)
                ?: "demo"
        val showDebug = applicationContext.getSharedPreferences("prefs.db", 0).getBoolean("showDebug", true)
        pushChannel =
            applicationContext.getSharedPreferences("prefs.db", 0).getString("pushChannel", null)
                ?: "game.push-sales"
        Log.d(logTag, "Subscribe Key is $subscribeKey")
        Log.d(logTag, "Push Channel is $pushChannel")
        this.pubnub = PubNub.create(
            PNConfiguration.builder(
                UserId(tempUserId),
                subscribeKey
            ).build()
        )
        
        // Make HTTP request using OkHttp
        val requestBody = """{"UUID": "$tempUserId"}""".toRequestBody(JSON)
        val request = Request.Builder()
            .url("https://devrel-demos-access-manager.netlify.app/.netlify/functions/api/pillar-live-events-guided/grant")
            .addHeader("Content-Type", "application/json")
            .addHeader("Origin", "https://pn-solution-live-events-guided.netlify.app")
            .post(requestBody)
            .build()
        
        client.newCall(request).enqueue(object : okhttp3.Callback {
            override fun onFailure(call: okhttp3.Call, e: IOException) {
                Log.e(logTag, "Failed to get token: ${e.message}")
            }

            override fun onResponse(call: okhttp3.Call, response: okhttp3.Response) {
                if (!response.isSuccessful) {
                    Log.e(logTag, "Failed to get token: ${response.code}")
                    return
                }
                try {
                    val responseBody = response.body?.string()
                    val token = JSONObject(JSONObject(responseBody).getString("body")).getString("token")
                    Log.d(logTag, "PubNub Access Token: $token")
                    //pubnub.setToken(token)
                    Log.d(logTag, pubnub.parseToken(token).toString())
                    createNotificationChannel()
                    getToken()  //  Firebase token
                    pushNotificationPermissionLauncher.launch(android.Manifest.permission.POST_NOTIFICATIONS)
                } catch (e: Exception) {
                    Log.e(logTag, "Error processing token response: ${e.message}")
                }

            }
        })
        

        //enableEdgeToEdge()
        setContent {
            LiveEventsDemosTheme {
                Scaffold(
                    modifier = Modifier
                        .fillMaxSize()
                        .padding(WindowInsets.statusBars.asPaddingValues()) // Add padding for the status bar
                ) { innerPadding ->

                    Column(
                        modifier = Modifier
                            .fillMaxSize()
                            .background(color = colorResource(R.color.navy900))

                    ) {

                        Row(
                            modifier = Modifier
                                .fillMaxWidth()
                                .background(color = colorResource(R.color.navy900))
                                .padding(16.dp)
                        ) {
                            Box(
                                modifier = Modifier.weight(1f)
                            ) {
                                androidx.compose.foundation.Image(
                                    painter = androidx.compose.ui.res.painterResource(R.drawable.logo_white),
                                    contentDescription = "Logo"
                                )
                            }
                            Row {
                                Box(
                                    modifier = Modifier.padding(end = 16.dp)
                                ) {
                                    androidx.compose.material3.Icon(
                                        imageVector = androidx.compose.material.icons.Icons.Default.Search,
                                        contentDescription = "Search",
                                        tint = colorResource(R.color.pubnub_white)
                                    )
                                }
                                Box {
                                    androidx.compose.material3.Icon(
                                        imageVector = androidx.compose.material.icons.Icons.Default.Menu,
                                        contentDescription = "Menu",
                                        tint = colorResource(R.color.pubnub_white)
                                    )
                                }
                            }
                        }
                        if (showDebug) {
                            Text(
                                text = "Subscribe Key: $subscribeKey",
                                modifier = Modifier.padding(innerPadding),
                                color = colorResource(R.color.pubnub_white)
                            )
                            Text(
                                text = "Push Channel: $pushChannel",
                                modifier = Modifier.padding(innerPadding),
                                color = colorResource(R.color.pubnub_white)
                            )
                            Text(
                                text = "Successfully Registered?: ${successfullyRegistered.value}",
                                modifier = Modifier.padding(innerPadding),
                                color = colorResource(R.color.pubnub_white)
                            )
                        }
                        Box(
                            modifier = Modifier
                                .fillMaxSize()
                                .background(color = colorResource(R.color.navy900)), // Set the background color
                            contentAlignment = androidx.compose.ui.Alignment.Center // Center the content within the Box
                        ) {
                            Column(
                                modifier = Modifier
                                    .wrapContentSize(), // Ensure the Column takes only the space it needs
                                horizontalAlignment = androidx.compose.ui.Alignment.CenterHorizontally, // Center components horizontally
                                verticalArrangement = androidx.compose.foundation.layout.Arrangement.Center // Center components vertically
                            ) {
                                Text(
                                    text = "Android emulator",
                                    color = colorResource(R.color.pubnub_white),
                                    fontSize = 30.sp,
                                    fontWeight = FontWeight.Bold
                                )
                                Spacer(modifier = Modifier.height(16.dp))
                                if (successfullyRegistered.value) {
                                    Text(
                                        text = "Push notifications will show up here",
                                        color = colorResource(R.color.pubnub_white),
                                    )
                                } else {
                                    Text(
                                        text = "Please Wait... Application is still loading. This may take several seconds. This text will update when the device is ready.",
                                        color = colorResource(R.color.pubnub_white),
                                        textAlign = androidx.compose.ui.text.style.TextAlign.Center, // Center the text alignment
                                        modifier = Modifier.padding(horizontal = 16.dp),
                                        fontWeight = FontWeight.SemiBold
                                    )
                                }
                            }
                        }

                    }
                }

            }
        }
    }

    private fun getToken() {
        //val pubnub: PubNub = PubNubObj().getInstance() //Using a singleton PubNub object to persist across the activities.
        FirebaseMessaging.getInstance().token.addOnCompleteListener { task ->
            try {
                val token = task.result
                if (token != null) {
                    Log.d(logTag, "Retrieved token: $token")
                    pubnub.addPushNotificationsOnChannels(
                        pushType = PNPushType.FCM,
                        deviceId = token,
                        channels = listOf(pushChannel) //provide a list of channels to enable push on them.
                    ).async { result ->
                        result.onFailure { exception ->
                            Log.d(logTag, "Push Registration Failed: $exception")
                        }.onSuccess {
                            Log.d(logTag, "Successfully Registered for Push")
                            successfullyRegistered.value = true
                        }
                    }
                } else {
                    Log.w(logTag, "Token was null")
                }
            } catch (_: Exception) {
                Log.w(logTag, "Error retrieving token, will retry")
                //  This issue seems to happen on a newly launched emulator through Appetize.io ('switching to device').  Seems to be a known issue.
                //  https://stackoverflow.com/questions/62562243/java-io-ioexception-authentication-failed-in-android-firebase-and-service-not
                Handler(Looper.getMainLooper()).postDelayed(Runnable { getToken(); }, 1000)
            }
        }
    }

    override fun onPause() {
        super.onPause()
        //  EventBus is used to communicate between the MainActivity and the FCM receiving service
        EventBus.getDefault().unregister(this)
    }

    override fun onResume() {
        super.onResume()
        //  EventBus is used to communicate between the MainActivity and the FCM receiving service
        EventBus.getDefault().register(this)
    }

    @Subscribe(threadMode = ThreadMode.MAIN)
    fun doThis(message: Pair<String, String>) {
        if (message.first == "newtoken") {
            pubnub.addPushNotificationsOnChannels(
                pushType = PNPushType.FCM,
                deviceId = message.second,
                channels = listOf(
                    pushChannel
                ) //provide a list of channels to enable push on them.
            ).async { result ->
                result.onFailure { exception ->
                    Log.d(logTag, "Push Registration Failed: $exception")
                }.onSuccess {
                    Log.d(logTag, "Push Registration Succeeded")
                }
            }
        }
    }

    //Creates the notification channel necessary to display incoming push notifications
    //Register the channel with the system
    private fun createNotificationChannel() {
        val notificationManager: NotificationManager =
            getSystemService(NOTIFICATION_SERVICE) as NotificationManager
            val name = getString(R.string.default_notification_channel_name)
            val descriptionText = getString(R.string.default_notification_channel_description)
            val importance = NotificationManager.IMPORTANCE_HIGH
            val channel = NotificationChannel(
                getString(R.string.default_notification_channel_id),
                name,
                importance
            ).apply {
                description = descriptionText
            }
            //Channel settings
            channel.description = descriptionText
            notificationManager.createNotificationChannel(channel)
        }
}
