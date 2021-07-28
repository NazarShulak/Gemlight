const cron = require('node-cron');

const delExpiredTokens = require('./delExpiredTokens');

module.exports.cronRun = async () => {
    cron.schedule('* * * * *', async () => {
        console.log('started');
        await delExpiredTokens();
        console.log('finished');
    });
};
