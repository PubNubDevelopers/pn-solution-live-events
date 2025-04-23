"use strict";
const axios = require("axios");
const inquirer = require("inquirer");
require("dotenv").config();

let sessionToken = null;
let userId = null;
let adminEmail = process.env.ADMIN_EMAIL || "";
let accountId = process.env.ACCOUNT_ID || "";
let aggregationWindowSec = process.env.AGGREGATION_WINDOW_SEC || "";

async function promptForCredentials() {
  if (!adminEmail) {
    const ans = await inquirer.prompt([
      {
        name: "ADMIN_EMAIL",
        message: "Enter ADMIN_EMAIL:",
        type: "input",
      },
    ]);
    adminEmail = ans.ADMIN_EMAIL;
  }
  if (!accountId) {
    const ans = await inquirer.prompt([
      {
        name: "ACCOUNT_ID",
        message: "Enter ACCOUNT_ID:",
        type: "input",
      },
    ]);
    accountId = ans.ACCOUNT_ID;
  }
  if (!aggregationWindowSec) {
    const ans = await inquirer.prompt([
      {
        name: "AGGREGATION_WINDOW_SEC",
        message: "Enter AGGREGATION_WINDOW_SEC:",
        type: "input",
      },
    ]);
    aggregationWindowSec = ans.AGGREGATION_WINDOW_SEC;
  }
  const passAns = await inquirer.prompt([
    {
      name: "ADMIN_PASSWORD",
      message: "Enter ADMIN_PASSWORD:",
      type: "password",
      mask: "*",
    },
  ]);
  return { adminEmail, adminPassword: passAns.ADMIN_PASSWORD };
}

async function authenticate(email, password) {
  const url = "https://admin.pubnub.com/api/me";
  const body = { email, password };
  const resp = await axios.post(url, body, {
    headers: { "Content-Type": "application/json" },
  });
  sessionToken = resp.data.result.token;
  userId = resp.data.result.user_id;
}

async function deactivateBusinessObjects() {
  const url = `https://admin.pubnub.com/illuminate/v1/accounts/${accountId}/business-objects/deactivate`;
  await axios.post(url, {}, { headers: { "X-Session-Token": sessionToken } });
}

async function createBusinessObject(name, jsonPathValue) {
  const url = `https://admin.pubnub.com/illuminate/v1/accounts/${accountId}/business-objects`;
  const body = {
    name,
    isActive: true,
    description: name,
    fields: [
      {
        name: "emojiType",
        source: "JSONPATH",
        jsonPath: jsonPathValue,
        jsonFieldType: "string",
        isKeyset: false,
      },
    ],
    subkeys: ["demo-subkey"],
    customerIds: [],
  };
  const resp = await axios.post(url, body, {
    headers: { "X-Session-Token": sessionToken, "Content-Type": "application/json" },
  });
  return resp.data;
}

async function createMetric(name, businessObjectId) {
  const url = `https://admin.pubnub.com/illuminate/v1/accounts/${accountId}/metrics`;
  const body = {
    name,
    businessObjectId,
    measureId: "emojiType",
    evaluationWindow: parseInt(aggregationWindowSec, 10),
    function: { name: "COUNT" },
    dimensionIds: [],
    filters: [],
  };
  const resp = await axios.post(url, body, {
    headers: { "X-Session-Token": sessionToken, "Content-Type": "application/json" },
  });
  return resp.data;
}

async function createDecision(name, metricId, actionId) {
  const url = `https://admin.pubnub.com/illuminate/v1/accounts/${accountId}/decisions`;
  const body = {
    name,
    description: name,
    sourceType: "METRIC",
    sourceId: metricId,
    hitType: "FIRST",
    enabled: true,
    executeOnce: false,
    executionFrequency: 0,
    inputFields: [
      {
        name: "Count",
        sourceType: { name: "METRIC" },
        sourceId: metricId,
      },
    ],
    outputFields: [
      {
        name: "PlaceholderOutput",
        variable: "placeholder",
      },
    ],
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
            executionLimitType: { name: "NONE" },
            executionLimitIntervalInSeconds: 0,
            executionLimitInputFieldIds: [],
          },
        ],
      },
    ],
    actions: [
      {
        id: actionId,
        name: `Action ${actionId}`,
        actionType: { name: "CUSTOM" },
        description: `Action for ${actionId}`,
        template: {},
        note: "",
      },
    ],
  };
  const resp = await axios.post(url, body, {
    headers: { "X-Session-Token": sessionToken, "Content-Type": "application/json" },
  });
  return resp.data;
}

async function handleReset() {
  await deactivateBusinessObjects();
  const boCheer = await createBusinessObject("Cheer Reaction", "$.emojiType[?(@=='cheer')]");
  const boAngry = await createBusinessObject("Angry Reaction", "$.emojiType[?(@=='angry')]");
  const cheerBoId = boCheer.id;
  const angryBoId = boAngry.id;
  const metricCheer = await createMetric("Cheer Count", cheerBoId);
  const metricAngry = await createMetric("Angry Count", angryBoId);
  const cheerMetricId = metricCheer.id;
  const angryMetricId = metricAngry.id;
  await createDecision("Cheer Decision", cheerMetricId, "002");
  await createDecision("Angry Decision", angryMetricId, "001");
}

async function main() {
  const creds = await promptForCredentials();
  await authenticate(creds.adminEmail, creds.adminPassword);
  for (;;) {
    const ans = await inquirer.prompt([
      {
        name: "action",
        message: "Enter command (reset/exit):",
        type: "input",
      },
    ]);
    const cmd = ans.action.trim().toLowerCase();
    if (cmd === "reset") {
      try {
        await handleReset();
      } catch (e) {}
    } else if (cmd === "exit" || cmd === "quit") {
      process.exit(0);
    }
  }
}

main().catch(() => {
  process.exit(1);
});
