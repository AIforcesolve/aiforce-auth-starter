const test = require("node:test");
const assert = require("node:assert/strict");
const { issueTokens, validateAccessToken } = require("./index.js");

test("issues and validates access token", () => {
  const { accessToken } = issueTokens("u1");
  assert.ok(accessToken);
  assert.equal(validateAccessToken(accessToken), true);
});
