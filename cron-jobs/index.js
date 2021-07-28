const cron = require('node-cron');

const delExpiredTokens = require('./delExpiredTokens');

module.exports.cronRun = async () => {
    cron.schedule('* * * * *', async () => {
        await delExpiredTokens();
    });
};
