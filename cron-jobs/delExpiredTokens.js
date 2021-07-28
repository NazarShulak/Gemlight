const { AuthModel } = require('../database');

module.exports = async () => {
    let currentDate = new Date()
    currentDate = currentDate.format("yyyy-mm-dd");

    console.log(currentDate);
    await AuthModel.destroy({
        where: { expireAt: { [Op.lt]: currentDate.getDate() } }
    });
    console.log('***SUCCESS****');
};
