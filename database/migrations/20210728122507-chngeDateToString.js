'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.changeColumn(
            'userAuth',
            'expireAt',
            {
                type: Sequelize.STRING,
                allowNull: false
            })
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.changeColumn('userAuth', 'expireAt', { type: Sequelize.DATEONLY, allowNull: false });
    }
};
