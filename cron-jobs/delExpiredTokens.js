const { AuthModel } = require('../database');

module.exports = async () => {
    const currentDate = new Date();

    console.log(currentDate.getDate());
    await AuthModel.destroy({
        where: { expireAt: { [Op.lt]: currentDate.getDate() } }
    });
    console.log('***SUCCESS****');
};
