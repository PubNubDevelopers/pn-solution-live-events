"use strict";
const axios = require("axios");
const inquirer = require("inquirer");
const dotenv = require("dotenv");

dotenv.config();

let sessionToken = null;
let userId = null;
let adminEmail = process.env.ADMIN_EMAIL || "";
let adminPassword = "";
let accountId = process.env.ACCOUNT_ID || "";
let aggregationWindowSec = process.env.AGGREGATION_WINDOW_SEC || "";
const MAX_RETRIES = 3;

axios.interceptors.request.use(
  (config) => {
    console.log("REQUEST:", config.method.toUpperCase(), config.url, config.data || "");
    return config;
  },
  (error) => {
    console.error("REQUEST ERROR:", error.message);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    console.log("RESPONSE:", response.config.url, response.status, JSON.stringify(response.data));
    return response;
  },
  (error) => {
    if (error.response) {
      console.error("RESPONSE ERROR:", error.config.url, error.response.status, error.response.data);
    } else {
      console.error("RESPONSE ERROR:", error.message);
    }
    return Promise.reject(error);
  }
);

async function promptEnvVars() {
  if (!adminEmail) {
    const ans = await inquirer.prompt([{ type: "input", name: "ADMIN_EMAIL", message: "Admin Email:" }]);
    adminEmail = ans.ADMIN_EMAIL;
  }
  if (!accountId) {
    const ans = await inquirer.prompt([{ type: "input", name: "ACCOUNT_ID", message: "Account ID:" }]);
    accountId = ans.ACCOUNT_ID;
  }
  if (!aggregationWindowSec) {
    const ans = await inquirer.prompt([
      { type: "input", name: "AGGREGATION_WINDOW_SEC", message: "Aggregation Window (sec):" },
    ]);
    aggregationWindowSec = ans.AGGREGATION_WINDOW_SEC;
  }
}

async function promptPassword() {
  const ans = await inquirer.prompt([{ type: "password", name: "ADMIN_PASSWORD", message: "Admin Password:" }]);
  adminPassword = ans.ADMIN_PASSWORD;
}

async function makeRequestWithRetry(config, retries = 0) {
  try {
    return await axios(config);
  } catch (err) {
    if (retries < MAX_RETRIES) {
      await new Promise((r) => setTimeout(r, Math.pow(2, retries) * 1000));
      return makeRequestWithRetry(config, retries + 1);
    } else {
      throw err;
    }
  }
}

async function login() {
  const data = { email: adminEmail, password: adminPassword };
  const res = await makeRequestWithRetry({
    method: "POST",
    url: "https://admin.pubnub.com/api/me",
    headers: { "Content-Type": "application/json" },
    data,
  });
  sessionToken = res.data.result.token;
  userId = res.data.result.user_id;
}

async function deactivateBusinessObjects() {
  await makeRequestWithRetry({
    method: "POST",
    url: `https://admin.pubnub.com/illuminate/v1/accounts/${accountId}/business-objects/deactivate`,
    headers: { "X-Session-Token": sessionToken },
  });
}

async function createBusinessObject(name, subkeys, jsonPath) {
  const data = {
    name,
    isActive: true,
    description: "Auto-created",
    fields: [
      {
        name: "PubNub Reaction Type",
        source: "JSONPATH",
        jsonPath,
      },
    ],
    subkeys: [subkeys],
    customerIds: [],
  };
  await makeRequestWithRetry({
    method: "POST",
    url: `https://admin.pubnub.com/illuminate/v1/accounts/${accountId}/business-objects`,
    headers: { "X-Session-Token": sessionToken, "Content-Type": "application/json" },
    data,
  });
}

async function createMetric(name, businessObjectId) {
  const data = {
    name,
    businessObjectId,
    evaluationWindow: parseInt(aggregationWindowSec, 10),
    function: { name: "COUNT" },
    dimensionIds: [],
    filters: [],
  };
  await makeRequestWithRetry({
    method: "POST",
    url: `https://admin.pubnub.com/illuminate/v1/accounts/${accountId}/metrics`,
    headers: { "X-Session-Token": sessionToken, "Content-Type": "application/json" },
    data,
  });
}

async function createDecision(name, sourceId, actionId) {
  const data = {
    name,
    description: "Auto decision",
    sourceType: "METRIC",
    sourceId,
    hitType: "ABOVE",
    enabled: true,
    executionFrequency: parseInt(aggregationWindowSec, 10),
    inputFields: [
      {
        name: "Metric Value",
        sourceType: { name: "METRIC_VALUE" },
        sourceId,
      },
    ],
    outputFields: [],
    rules: [
      {
        inputValues: [
          {
            inputFieldId: "",
            operation: ">",
            argument: "20",
          },
        ],
        outputValues: [],
        actionValues: [
          {
            actionId,
            status: true,
            executionLimitType: { name: "OFF" },
            executionLimitIntervalInSeconds: 0,
            executionLimitInputFieldIds: [],
          },
        ],
      },
    ],
    actions: [
      {
        id: actionId,
        name: actionId,
        actionType: { name: "CUSTOM" },
      },
    ],
  };
  await makeRequestWithRetry({
    method: "POST",
    url: `https://admin.pubnub.com/illuminate/v1/accounts/${accountId}/decisions`,
    headers: { "X-Session-Token": sessionToken, "Content-Type": "application/json" },
    data,
  });
}

async function resetIlluminateObjects() {
  await deactivateBusinessObjects();
  await createBusinessObject("cheer", "demoSubscribeKey", "$.emojiType[?(@=='cheer')]");
  await createBusinessObject("angry", "demoSubscribeKey", "$.emojiType[?(@=='angry')]");
  await createMetric("countCheer", "cheer");
  await createMetric("countAngry", "angry");
  await createDecision("cheerDecision", "countCheer", "002");
  await createDecision("angryDecision", "countAngry", "001");
}

async function promptForCommands() {
  while (true) {
    const ans = await inquirer.prompt([
      { type: "input", name: "cmd", message: "Enter a command (reset, exit, quit):" },
    ]);
    if (ans.cmd === "reset") {
      try {
        await resetIlluminateObjects();
      } catch (e) {}
    } else if (ans.cmd === "exit" || ans.cmd === "quit") {
      process.exit(0);
    }
  }
}

(async () => {
  try {
    await promptEnvVars();
    await promptPassword();
    await login();
    await promptForCommands();
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
})();
