const TIMEOUT = 3000;

module.exports = {
  pageURL: process.env.APP_URL || 'http://localhost:3000',

  waitForConditionTimeout: TIMEOUT,
};
