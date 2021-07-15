module.exports = {
    getUsers: async (req, res) => {
        const response = await fetch("/api/users", {
            method: "GET"
        });

        if (response.ok === true) {
            const users = await response.json();
            res.json(users);
        }
    }
};
