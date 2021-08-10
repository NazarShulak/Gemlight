'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.removeColumn('userInfo', 'age');
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.addColumn('userInfo', 'age', { type: Sequelize.INTEGER, allowNull: false });
    }
};
