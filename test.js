const test = require("node:test");
const assert = require("node:assert/strict");
const { solve } = require("./index.js");

test("starter scaffold is wired (test:auth)", () => {
  assert.notEqual(solve("probe"), null, "Implement solve() in index.js");
});
