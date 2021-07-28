const cron = require('node-cron');

const delExpiredTokens = require('./delExpiredTokens');

module.exports.cronRun = async () => {
    cron.schedule('0 * * * *', async () => {
        await delExpiredTokens();
    });
};
