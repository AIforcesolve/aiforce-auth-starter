const test = require("node:test");
const assert = require("node:assert/strict");
const bcrypt = require("bcryptjs");
const savePassword = require("./index.js");

test("does not store the password as plain text", () => {
  const stored = savePassword("hunter2");
  assert.notEqual(stored, "hunter2");
});

test("hash can be verified with bcrypt.compareSync", () => {
  const stored = savePassword("hunter2");
  assert.ok(bcrypt.compareSync("hunter2", stored));
  assert.ok(!bcrypt.compareSync("wrong-password", stored));
});
