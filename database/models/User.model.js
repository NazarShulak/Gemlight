const { DataTypes } = require('sequelize');

module.exports = (client) => {
    const User = client.define(
        {
            User_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            age: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            tableName: 'userInfo',
            timestamps: false
        }
    );

    return User;
};