'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('userAuth', 'expireAt', { type: Sequelize.DATE, allowNull: false });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('userAuth', 'expireAt');
  }
};
