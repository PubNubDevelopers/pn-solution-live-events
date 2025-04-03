package com.pubnub.demos.liveevents

import android.app.NotificationManager
import android.app.PendingIntent
import android.content.Intent
import android.graphics.BitmapFactory
import android.util.Log
import androidx.core.app.NotificationCompat
import androidx.core.content.ContextCompat
import com.google.firebase.messaging.FirebaseMessagingService
import com.google.firebase.messaging.RemoteMessage
import org.greenrobot.eventbus.EventBus

class FCMHandler : FirebaseMessagingService() {
    private val logTag = "PNLiveEvents"

    override fun onNewToken(token: String) {
        //Called whenever the FCM token is renewed - re-register the device with PubNub
        Log.d(logTag, "New Token Received: $token")
        sendRegistrationToPubNub(token)
    }

    //Handle when the device has received a push notification from FCM.
    override fun onMessageReceived(remoteMessage: RemoteMessage) {
        super.onMessageReceived(remoteMessage)
        var title : String
        var body : String

        Log.d(logTag, "Message Received from FCM")

        // Check if message contains a data payload.
        //  This is always handled by the application regardless of foreground / background.
        //  Display the notification ourselves
        if (remoteMessage.data.isNotEmpty()) {
            remoteMessage.data.let {
                Log.d(logTag, "Message data payload: " + remoteMessage.data)
                title = remoteMessage.data["title"].toString()
                body = remoteMessage.data["body"].toString()
                sendNotification(title, body)
            }
        }

        // Check if message contains a notification payload.
        //  This will never be the case when the app is in the background (since the
        //  notification is handled automatically by FCM).
        //  If we are in the foreground, display a notification
        remoteMessage.notification?.let {
            Log.d(logTag, "Message Notification Body: ${it.body}")
            title = remoteMessage.notification?.title.toString()
            body = remoteMessage.notification?.body.toString()
            sendNotification(title, body)
        }
    }

    //  Register the device on PubNub Channels to enable push notifications on those channels.
    //  This is called whenever the token changes
    private fun sendRegistrationToPubNub(token : String) {
        Log.d(logTag, "Sending Registration token to PubNub")
        EventBus.getDefault().post(Pair("newtoken", token))
    }

    //Send the notification to the device manager to display the notification to the user.
    private fun sendNotification(title: String, body: String) {
        val notificationID = 101
        //  Just launch the app if the notification is tapped
        val intent = Intent(this, MainActivity::class.java).apply {
            flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TASK
        }
        val pend = PendingIntent.getActivity(this, 0, intent, PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE)
        val channelID = getString(R.string.default_notification_channel_id) //  This is the Android Channel, not the PubNub Channel
        //  For simplicity, rather than fuss with sending meta data with the notification, or using different channels,
        //  Just display a picture for the notification based on the body text
        var bm = BitmapFactory.decodeResource(resources, R.drawable.cup)
        if (body.contains("mentioned"))
        {
            bm = BitmapFactory.decodeResource(resources, R.drawable.messages)
        }
        var builder = NotificationCompat.Builder(this, channelID)
            .setSmallIcon(R.drawable.ic_launcher_foreground)
            .setLargeIcon(bm)
            .setContentTitle(title)
            .setContentText(body)
            .setPriority(NotificationCompat.PRIORITY_HIGH)
            .setColor(ContextCompat.getColor(applicationContext, R.color.navy900))
            .setContentIntent(pend)
            .setAutoCancel(true)
        val notificationManager: NotificationManager =
            getSystemService(NOTIFICATION_SERVICE) as NotificationManager
        notificationManager.notify(notificationID, builder.build())
    }
}