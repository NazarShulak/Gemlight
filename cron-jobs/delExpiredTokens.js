const { AuthModel } = require('../database');

module.exports = async () => {
    const currentDate = new Date();
    const date = currentDate.format("yyyy-mm-dd");



    console.log(date.getDate());
    await AuthModel.destroy({
        where: { expireAt: { [Op.lt]: date.getDate() } }
    });
    console.log('***SUCCESS****');
};
