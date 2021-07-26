const cron = require('node-cron');

const delExpiredTokens = require('./delExpiredTokens');

module.exports.cronRun = async () => {
    cron.schedule('59 23 * * *', async () => {
        await delExpiredTokens();
    });
};
