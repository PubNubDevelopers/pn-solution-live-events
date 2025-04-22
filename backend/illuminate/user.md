# Details and Instructions Relating to Illuminate

### Respond to requests initiated by the 'Data Controls' panel

• Cause additional data messages to be sent (for example, "Fan excitement" will generate 20 "cheer" emoji; "Fan frustration" will generate 25 "anger" emoji).  
  - Note: An Illuminate decision will exist on the keyset to respond to the number of "cheer" emoji, for example. Allowing the sales person to demonstrate Illuminate without having to keep pressing on the emoji reaction—of course the user could still trigger that same Illuminate action by clicking the reaction if they wanted to, or they are experiencing the demo without a sales person.

---

### Respond to requests from Illuminate, specifically requests to 'initiate polls' on demand

There is a requirement to "launch a poll" if some Illuminate condition is met (e.g., if there are more than 20 "cheer" emoji in the past minute). This needs to be tolerant of duplicate messages from Illuminate, so will probably need some kind of cool-down period.

Under section 2 (Data Controls), a dedicated array of actions is run whenever a specific message is received. We will do something similar for Illuminate actions. We will define a series of action arrays and assign each an ID; an array will trigger whenever Illuminate requests that ID.

One action Illuminate will request is to launch a poll. It would be ideal if the poll votes were procedurally generated while also reflecting any real answers given by people interacting with the demo (so poll results show actual user inputs).

#### Illuminate actions are as follows:

| ID  | Description                                                          |
| --- | -------------------------------------------------------------------- |
| 001 | Reaction = 😡 Launch a poll to ask "Which team is playing the dirtiest?" |
| 002 | Reaction = 🎉 Launch a poll to ask "Which team's fans are celebrating the hardest?" |
| 003 | // More might be added                                              |

---

### Custom Action Array (Relevant to Illuminate)

Some response logic might require messages to be sent in a controlled manner rather than as quickly as possible. The `delayOffsetInMs` specifies a time to wait before sending a message, measured from when the request is first received (e.g., from Illuminate). This does not have to be ultra-precise; the purpose is to space messages out (e.g., a 2-second gap).

• Use case for `delayOffsetInMs`: Handling requests from Illuminate to launch polls, vote after a short delay, repeat, then end the poll after enough time has passed for everyone to respond.

Example format:
```
[
  {
    "delayOffsetInMs": 0,
    "persistInHistory": false,
    "action": {
      "channel": "<string>",
      "data": { ... }
    },
    "repeat": <number>
  },
  ...
]
```

---

### 3. Reset all Illuminate objects in the Sales demo account

This logic will execute when the sales person presses the "Reset Demo" button on logging in. We have an Illuminate API that requires the username and password for the "demo@pubnub.com" account to modify the Illuminate objects. This needs to be protected from unauthorized access or abuse.
