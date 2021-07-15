module.exports = {
    getUsers: async (req, res) => {
        const response = await fetch('https://dev.api.cloud.picupmedia.com/docs#/User/get_api_users_me', {
            method: "GET"
        });

        if (response.ok === true) {
            const users = await response.json();
            res.json(users);
        }
    }
};
