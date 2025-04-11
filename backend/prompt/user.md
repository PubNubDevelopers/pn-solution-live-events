# Live Events Demo Backend Definition

## 4 Primary purposes of the backend:

1. Send data to the frontend via PubNub that is in sync with the video playing in the client browser  
   * All viewers will be watching a synchronized video, so they are all seeing the same thing  
   * Synchronizing the data with the video will make the experience more realistic, e.g. chat messages discuss what is happening in the game and "cheer" at the correct times.  
   * Logic should allow the video to loop, and allow new joiners after the video has started   
     * (the self-led scenario will run in a continual loop all the time)  
2. Respond to requests initiated by the "Data Controls" panel (which is used exclusively by a sales person as part of a guided demo)  
   * Two types of action based on these controls:  
     * 1: Skip to a specific position in the live stream (e.g. start it, skip 5 minutes to the end).    
     * 2: Cause additional data messages to be sent (e.g. "Fan excitement" will generate 20 "cheer" emoji; "Fan frustration" will generate 25 "anger" emoji).

## How it works:

1. **Send data to the frontend via PubNub that is in sync with the video playing in the browser:**

There will exist a JSON array to map video timecodes to actions, e.g.   
```javascript
[  
  {  
    timeSinceVideoStartedInMs: 0,  
    //  (whether or not to persist the sent message, defaults to false if unspecified)  
    persistInHistory: bool,  
    action: {  
      //  Message to be sent on this channel  
      channel: <string> ,  
      //  This JSON object is the body of the "message" object  
      data: <params, as defined in table below>  
    },  
    **repeat**: number //  number of times to repeat the action (useful for reactions)  
  },  
  //  more time codes mapped to actions  
]
```

```javascript
[  
  {  
    timeSinceVideoStartedInMs: 0,  
    //  (whether or not to persist the sent message, defaults to false if unspecified)  
    persistInHistory: bool,  
    action: {  
      //  Message to be sent on this channel  
      channel: <string> ,  
      //  This JSON object is the body of the "message" object  
      data: <params, as defined in table below>  
    },  
    **repeat**: number //  number of times to repeat the action (useful for reactions)  
  },  
  //  more time codes mapped to actions  
]
```

```javascript
[  
  {  
    timeSinceVideoStartedInMs: 0,  
    //  (whether or not to persist the sent message, defaults to false if unspecified)  
    persistInHistory: bool,  
    action: {  
      //  Message to be sent on this channel  
      channel: <string> ,  
      //  This JSON object is the body of the "message" object  
      data: <params, as defined in table below>  
    },  
    **repeat**: number //  number of times to repeat the action (useful for reactions)  
  },  
  //  more time codes mapped to actions  
]
```

```javascript
[  
  {  
    timeSinceVideoStartedInMs: 0,  
    //  (whether or not to persist the sent message, defaults to false if unspecified)  
    persistInHistory: bool,  
    action: {  
      //  Message to be sent on this channel  
      channel: <string> ,  
      //  This JSON object is the body of the "message" object  
      data: <params, as defined in table below>  
    },  
    **repeat**: number //  number of times to repeat the action (useful for reactions)  
  },  
  //  more time codes mapped to actions  
]
```

```javascript
[  
  {  
    timeSinceVideoStartedInMs: 5,  
    //  (whether or not to persist the sent message, defaults to false if unspecified)  
    persistInHistory: bool,  
    action: {  
      //  Message to be sent on this channel  
      channel: <string> ,  
      //  This JSON object is the body of the "message" object  
      data: <params, as defined in table below>  
    },  
    **repeat**: number //  number of times to repeat the action (useful for reactions)  
  },  
  //  more time codes mapped to actions  
]
```

Possible actions with params (using the Core SDK, unless otherwise specified):  
*Note: Each row represents a different PubNub channel.*

| Action (Message) | Params |
| :---- | :---- |
| Send Chat Message Channel: game.chat | Definition in Array is as follows: {user: "bot-01", text: "message text"} Which will result in a Chat SDK call for the instance associated with the specified user as follows: channel?.sendText("message text")  |
| Live Commentary Channel: game.commentary | Commentary containing text and the time at which that commentary happened on the game clock {text: "Commentary text", timeCode: "MM:ss"} |
| Reactions shown over video overlay Channel: game.stream-reactions | Emoji to show.  This message will trigger 1 emoji of the specified type {text: "🎉", type: "reaction"}  |
| Poll: New Poll Channel: game.new-poll | ID, title, options [id, optionText], points for correct answer (optional), type (i.e. below the live stream, or in the dedicated poll widget) {id: number, title: "Poll Title", victoryPoints: number, pollType: "side", alertText: "New Poll", options [{id: 1, "text": "YES"},{id: 2, "text": "NO"}]}  Above example is for a poll with two choices, "yes" and "no". pollType refers to where the UX should position the poll and can be either "side" (on the RHS, within the dedicated poll widget) or "match" (directly below the live stream) Note that "alertText" is optional, and will change the text shown in the "New poll available" animation that appears on the front end when a new poll is shown.  Note: Only the live stream poll will be persisted in PubNub history |
| Poll: Vote (front end graph of answers will update in real-time as others vote on the poll they do not have to wait for the poll results) Channel: game.poll-votes | {pollId: number, questionId: "1", choiceId: number, pollType: "side"} PollId refers to the ID given to the poll when it was first created.  choiceId refers to a previously declared "options" id when the poll was declared It would be great if we could procedurally generate votes.  On the front end, I don"t actually show the vote tally, just the percentage so perhaps just choose a weighting for each question, so it"s not always evenly distributed.  |
| Poll: Results Channel: game.poll-results | Same as "new poll", but omitting "alertText and including the "correct answer" (optional) and the results for each option the front end is not expected to tally each poll vote, since they might join late {id: number, title: "Poll Title", victoryPoints: number, pollType: "side", **correctOption: 2**, options [{id: 1, "text": "YES", **score: 33**},{id: 2, "text": "NO"**, score: 47**}]} **Note: It would be great if the poll results were the ACTUAL count of the votes that were passed.  I.e. the total of the scripted votes AND any votes made by users interacting with the app, so they affect the outcome.** This means the poll results (options scores) would NOT be scripted, but generated by the backend. |
| Match Stats Channel: game.match-stats | JSON object containing the current match stats (or more likely a subset thereof).  So, when somebody scores a goal, or gets a yellow card, the stat associated with that will update. This is highly configurable in the app, but one example might be: statBox1: {          info: [            {              stat: "30%"            },            {              stat: "70%"            }          ]        },        statBox2: {          info: [            {              stat: 5            }          ]        }, There are 6 stat boxes, which can be each of 3 different "box types" |

A process will exist for the duration of video playback to periodically (say every 500ms):

1. Check which actions should have been executed since the last time the function ran, and send all the appropriate messages over PubNub.  
   1. I think this will be sufficient to avoid drift between what video the client is viewing, and what data they are receiving from the backend.  
2. Send a control message containing the current video playback time (allowing new joiners to sync their front end video stream with the data being sent)  
   1. Remember the video will also loop, so this control message should also allow the frontend to handle that 

| Video Status (Message) | Params |
| :---- | :---- |
| Video status  Channel: game.client-video-control | { type: "STATUS" params:    {     playbackTime: number // in ms,     videoStarted: boolean //  only for first message of video loop     videoEnded: boolean //  only for last message of video loop   } } Playback time is the current video seek position videoStarted and videoEnded are used by the client for additional stream control |

**2. Respond to requests initiated by the "Data Controls" panel (which is used exclusively by a sales person as part of a guided demo)**

* If skipping to a new location in the steam, send a "seek" message to this effect and skip to the appropriate location in the video timecode array previously described.  
  * Front end clients will receive the "seek" message, and adjust their playback location  
  * Dedicated message for start stream ("kickoff") and stop stream ("end match").  

| Action (Message) | Params |
| :---- | :---- |
| Start stream Channel: game.client-video-control | `{ type: "START_STREAM" params: {} }`  |
| Video seek Channel: game.client-video-control | Time to seek to in ms `{ type: "SEEK" params:    {     playbackTime: number //  in ms   } }` |
| End stream Channel: game.client-video-control | `{ type: "END_STREAM" params: {} }` |

* Any messages sent in response to the "Data Controls" panel are **in addition** to the periodic messages described previously. 

Assume that for each message in the "data controls" panel there will be an individual JSON array, processed when the message from "data controls" is received, and run in parallel to the JSON array described in section 1:  

| Data Controls request | Info |
| :---- | :---- |
| Kick Off | Results in a "start stream" message |
| Goal | Results in a "video seek" message.  The "Goal request will need to contain the time to seek to.  I.e. the fourth goal of the match at 315000 |
| Fan Excitement | Results in a custom action array being run (example is given below) |
| Fan frustration | Results in a custom action array being run |
| Five minutes remaining | Results in a "video seek" message.  The request will need to contain the time to seek to, specifically 1099000 |
| End Match | Results in an "End stream" message |
| Send Push Message | Results in a custom action array being run, either: push-goal.js push-5mins.js |

**Custom Action Array:**

Controlling the rate of messages in response to a request from the data controls panel (delayOffsetInMs):  Some response logic might require that messages not be sent in a controlled manner, and not "as quickly as possible".  The `delayOffsetInMs` specifies a time to wait before sending this message, measured from the initial receipt of the request from the "data controls".  **This does not have to be precise**, the purpose is just to space messages out if there needs to be a 2 second gap for example..

**Use case for delayOffsetInMs**: Start poll, vote after delay of 1000, repeat 4 times, end poll after further delay to allow everyone to respond. 

Format of array is as follows:  
```javascript
[  
  {  
    //  Described above  
    delayOffsetInMs: 0,  
    //  Whether the message should be stored in PubNub persistence  
    persistInHistory: bool,  
    action: {  
      //  Message to be sent on this channel  
      channel: <string> ,  
      //  This JSON object is the body of the "message" object  
      data: <params, as defined in table below>  
    },  
    repeat: number, //  Number of times to repeat the action  
  },  
  //  additional objects  
]
```

E.g. for "Fan Excitement"  
```javascript
[  
  {  
    delayOffsetInMs: 0,  
    persistInHistory: false,  
    action: {  
      channel: "game.streamreactions",  
      data: {text: "🎉", type: "reaction"}  
    },  
    repeat: 10,  
  },  
  {  
    delayOffsetInMs: 0,  
    persistInHistory: false,  
    action: {  
      channel: "game.streamreactions",  
      data: {text: "🙌", type: "reaction"}  
    },  
    repeat: 10,  
  },  
]
```

```javascript
[  
	{  
delayOffsetInMs: 0,  
persistInHistory: false,  
action: {  
  channel: "game.streamreactions",  
  data: {text: "🎉", type: "reaction"}  
},  
repeat: 10,  
},  
… About 15 more times, plus also with the 🙌 emoji  
]
```
