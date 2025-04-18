# PubNub Live Events Solution Demo

Solution showcase to demonstrate how PubNub can enhance your live event, whether it is a sports event, a concert, or any other streamed media event.

## Backend Data Generator

The backend service generates and publishes live event data to PubNub channels.

Prerequisites:
- Node.js (>= 14)
- npm

Setup:
```bash
cd backend
npm install
```

Environment variables:
Create a `.env` file in the `backend/` directory with your PubNub credentials:
```
PUBNUB_PUBLISH_KEY=<your-publish-key>
PUBNUB_SUBSCRIBE_KEY=<your-subscribe-key>
```

Running the generator:
```bash
npm run generator    # runs node index.js, launching the event stream
```

Rebuild server (after prompt/developer/user edits):
```bash
./build.sh
```

## Web Application

The web app provides the user interface and consumes PubNub live events.

Prerequisites:
- Node.js (>= 16)
- npm (or yarn / pnpm)

Setup:
```bash
cd web
npm install
```

Environment variables:
Create an `.env.local` file in the `web/` directory with:
```
NEXT_PUBLIC_PUBNUB_PUBLISH_KEY=<your-publish-key>
NEXT_PUBLIC_PUBNUB_SUBSCRIBE_KEY=<your-subscribe-key>
NEXT_PUBLIC_GUIDED_DEMO=true
```

Running in development:
```bash
npm run dev         # starts Next.js at http://localhost:3000
```

Building for production:
```bash
npm run build       # builds optimized production bundle
npm run start       # starts the production server
```
