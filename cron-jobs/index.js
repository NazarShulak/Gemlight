const cron = require('node-cron');

const delExpiredTokens = require('./delExpiredTokens');

module.exports.cronRun = async () => {
    cron.schedule('@daily', async () => {
        await delExpiredTokens();
    });
};
