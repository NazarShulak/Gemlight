module.exports = {
    getUsers: async (req, res) => {
        const response = await fetch("/api/users", {
            method: "GET",
            headers: {"Accept": "application/json"}
        });

        if (response.ok === true) {
            console.log('ok')
            const users = await response.json();
            res.json(users);
        }
    }
};
