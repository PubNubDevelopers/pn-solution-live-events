"use strict";
// tests/timeline.test.js
// Simple tests for expandRepeatedEvents and buildMatchScript in lib/timeline.js

const assert = require('assert');
const path = require('path');
const { expandRepeatedEvents, buildMatchScript } = require(path.resolve(__dirname, '../lib/timeline.js'));

(function testExpandRepeatedEvents_NoRepeat() {
  const events = [{ timeSinceVideoStartedInMs: 100, repeat: 1 }];
  const out = expandRepeatedEvents(events);
  assert(Array.isArray(out), 'Output should be an array');
  assert.strictEqual(out.length, 1, 'Should have one event');
  assert.strictEqual(out[0].timeSinceVideoStartedInMs, 100);
  console.log('✔ expandRepeatedEvents - no repeat');
})();

(function testExpandRepeatedEvents_WithRepeat() {
  const ev = { timeSinceVideoStartedInMs: 0, repeat: 3, action: { channel: 'x', data: {} } };
  const out = expandRepeatedEvents([ev]);
  assert.strictEqual(out.length, 3, 'Should expand into 3 events');
  assert.strictEqual(out[0].timeSinceVideoStartedInMs, 0, 'First time must equal original');
  for (let i = 1; i < out.length; i++) {
    assert(out[i].timeSinceVideoStartedInMs >= out[i-1].timeSinceVideoStartedInMs,
      'Subsequent times should be non-decreasing');
    assert.strictEqual(out[i].repeat, 1, 'Repeat flag should be reset to 1');
  }
  console.log('✔ expandRepeatedEvents - with repeat');
})();

(function testBuildMatchScript_Sorted() {
  const script = buildMatchScript();
  assert(Array.isArray(script), 'Script should be an array');
  for (let i = 1; i < script.length; i++) {
    assert(script[i].timeSinceVideoStartedInMs >= script[i-1].timeSinceVideoStartedInMs,
      'Script should be sorted by timeSinceVideoStartedInMs');
  }
  console.log('✔ buildMatchScript - sorted order');
})();

console.log('All tests passed.');