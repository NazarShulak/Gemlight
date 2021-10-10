'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.addColumn('userInfo', 'status', {
            type: Sequelize.ENUM(['Pending', 'Active']),
            allowNull: false
        });
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.removeColumn('userInfo', 'status');
    }
};
