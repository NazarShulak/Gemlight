'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('userInfo', 'AuthId', { type: Sequelize.STRING, allowNull: true });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('userInfo', 'AuthId');
  }
};

