// TODO: OAuth2 + JWT auth server
function issueTokens(userId) {
  return { accessToken: null, refreshToken: null };
}
function validateAccessToken(token) {
  return false;
}
module.exports = { issueTokens, validateAccessToken };
