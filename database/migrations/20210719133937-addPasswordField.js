'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.addColumn('userInfo', 'password', { type: Sequelize.STRING, allowNull: false });
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.removeColumn('userInfo', 'password');
    }
};
