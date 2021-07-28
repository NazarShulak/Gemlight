const { AuthModel } = require('../database');

module.exports = async () => {
    const currentDate = new Date();

    console.log(currentDate);
    await AuthModel.destroy({
        where: { expireAt: { [Op.lt]: currentDate } }
    });
    console.log('***SUCCESS****');
};
