const cron = require('node-cron');

const delExpiredTokens = require('./delExpiredTokens');

module.exports.cronRun =async () => {
    cron.schedule('*/30 * * * * *', async () => {
        console.log(`Cron iteration start at ${new Date().toISOString()}`);
        await delExpiredTokens();
        console.log(`Cron iteration finish at ${new Date().toISOString()}`);
    });
};
