const getUsers = require('./get-users');
const createUser = require('./create-user');
const deleteUser = require('./delete-user');

module.exports = {
    paths: {
        '/api/users': {
            ...getUsers,
            ...createUser
        },
        '/api/users/{id}': {
            ...deleteUser
        }
    }
};
