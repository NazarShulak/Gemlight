const { AuthModel } = require('../database');
const { Op } = require('sequelize')

module.exports = async () => {
    const date = new Date();

    const curr_date = date.getDate();
    const curr_month = date.getMonth();
    const curr_year = date.getFullYear();

    const currentDate = [curr_year, curr_month, curr_date].join('-');

    console.log('*********');
    await AuthModel.destroy({
        where: {
            expireAt: {
                [Op.lt]: currentDate
            }
        }
    });
    console.log('***SUCCESS****');
};
