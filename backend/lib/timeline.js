"use strict";
// lib/timeline.js
// Core timeline logic: expand repeats and merge data modules into a sorted script.

const { chat } = require("../game-data/chat.js");
const { commentary } = require("../game-data/commentary.js");
const { polls } = require("../game-data/polls.js");
const { reactions } = require("../game-data/reactions.js");
const { stats } = require("../game-data/stats.js");

/**
 * Expand events that have a `repeat` count into multiple events with randomized delays.
 * @param {Array} events Array of event objects with timeSinceVideoStartedInMs and optional repeat
 * @returns {Array} Expanded array where each event has repeat=1
 */
function expandRepeatedEvents(events) {
  const expanded = [];
  events.forEach((ev) => {
    if (ev.repeat && ev.repeat > 1) {
      let lastTime = ev.timeSinceVideoStartedInMs;
      for (let i = 0; i < ev.repeat; i++) {
        let randomDelay = Math.floor(500 + Math.random() * 2000);
        if (i === 0) randomDelay = 0;
        let newTime = lastTime + randomDelay;
        lastTime = newTime;
        expanded.push({
          ...ev,
          timeSinceVideoStartedInMs: newTime,
          repeat: 1
        });
      }
    } else {
      expanded.push(ev);
    }
  });
  return expanded;
}

/**
 * Build the match script by merging all data sources and sorting by time.
 * @returns {Array} Sorted array of all events
 */
function buildMatchScript() {
  const merged = [
    ...chat,
    ...commentary,
    ...polls,
    ...reactions,
    ...stats
  ];
  const expanded = expandRepeatedEvents(merged);
  expanded.sort((a, b) => a.timeSinceVideoStartedInMs - b.timeSinceVideoStartedInMs);
  return expanded;
}

module.exports = { expandRepeatedEvents, buildMatchScript };