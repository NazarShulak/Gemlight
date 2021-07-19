const fetch = require('node-fetch');

module.exports = {
    getUsers: async (req, res, next) => {
        try {
            await fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json())
                .then(json => res.json(json));
        } catch (e) {
            next(e);
        }
    },

    createUsers: (req, res, next) => {
        try {
            res.json('created');
        } catch (e) {
            next(e);
        }
    }
};
