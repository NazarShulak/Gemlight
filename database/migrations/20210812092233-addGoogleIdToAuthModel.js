'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.addColumn('userAuth', 'googleId', { type: Sequelize.INTEGER, allowNull: true });
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.removeColumn('userAuth', 'googleId');
    }
};
