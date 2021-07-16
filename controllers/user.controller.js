const fetch = require('node-fetch');

module.exports = {
    getUser: async (req, res, next) => {
        try {
            await fetch('https://dev.api.cloud.picupmedia.com/docs#/User/')
                .then(res => res.json())
                .then(json => res.json(json));

        } catch (e) {
            next(e);
        }
    }
}
