const { AuthModel } = require('../database');

module.exports = async () => {
    const currentDate = new Date();

    await AuthModel.destroy({
        where: { expireAt: { [Op.lt]: currentDate } }
    });
};
