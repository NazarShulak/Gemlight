const cron = require('node-cron');

const delExpiredTokens = require('./delExpiredTokens');

module.exports.cronRun = async () => {
    cron.schedule('*/2 * * * *', async () => {
        console.log('started');
        await delExpiredTokens();
        console.log('finished');
    });
};
