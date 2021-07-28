const { AuthModel } = require('../database');

module.exports = async () => {
    const date = new Date();

    const curr_date = date.getDate();
    const curr_month = date.getMonth();
    const curr_year = date.getFullYear();

    const currentDate = [curr_year, curr_month, curr_date].join('-');
    console.log(Date.parse(currentDate));
    console.log('**here**');
    await AuthModel.destroy({
        where: { expireAt: { $lt: currentDate } }
    });
    console.log('***SUCCESS****');
};
