const { UserModel } = require('../database');

module.exports = {
    getUsers: async (req, res, next) => {
        try {
            const result = await UserModel.findAll({});

            res.json(result);
        } catch (e) {
            next(e);
        }
    },

    createUsers: async (req, res, next) => {
        console.log('**********************');
        try {
            const { name, age, email, password } = req.body;
            const result = await UserModel.create({ name, age, email, password });
            console.log(result);
        } catch (e) {
            next(e);
        }
        res.json('created ');
    }
};
