const app = require('./app');
const { PORT } = require("./constants/constants");
const { sequelize } = require("./database/connection");
const { cronRun } = require("./cron-jobs");

(async () => {
    try {
        await sequelize.sync();

        app.listen(PORT, () => {
            console.log(`App listen ${PORT}`);
        });

        cronRun();
    } catch (e) {
        console.log(e)
    }
})();
