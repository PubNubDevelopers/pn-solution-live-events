# Illuminate Demo App

This repository contains a build script (`./build.sh`) that generates a Node.js application (`illuminate.js`) to aggregate message data and trigger actions via the PubNub & Illuminate APIs.

## Prerequisites

- Node.js v14+ installed
- `jq` (for JSON manipulation)
- `curl`
- An OpenAI API key (`OPENAI_API_KEY`) for the build process

## Setup

1. Initialize the Node.js project and install dependencies:
   ```bash
   npm init -y
   npm install axios inquirer dotenv
   ```

2. Create a `.env` file in the project root with the following variables (excluding `ADMIN_PASSWORD`, which will be prompted at runtime):
   ```ini
   # Illuminate Admin credentials
   ADMIN_EMAIL=demo@pubnub.com
   # ADMIN_PASSWORD will be prompted at runtime and should not be stored here

   # Illuminate account and PubNub credentials
   ACCOUNT_ID=<your_demo_account_id>

   # Timing settings (in seconds)
   AGGREGATION_WINDOW_SEC=60
   ```

3. Make the build script executable:
   ```bash
   chmod +x build.sh
   ```

## Build

Run the build script to generate `illuminate.js`:
```bash
./build.sh
```
The build may take several minutes. On success you will see:
```
Build complete 🎉
Output saved to illuminate.js and revisions directory.
Run: node illuminate.js to provision.
```

## Run

Execute the generated Node.js script:
```bash
node illuminate.js
```
This will:
  - Authenticate with the Illuminate Admin API
  - Provision or reset business objects, metrics, and decisions
  - Simulate poll votes using the provided `polls.js` modules

## Further Details

See `user.md` and `developer.txt` for full architecture, API endpoint details, and data flow instructions.
