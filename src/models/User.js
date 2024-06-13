const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Client = require('./Client');

const User = sequelize.define('User', {
    Login: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    Contrasena: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Direccion: DataTypes.STRING,
    Email: DataTypes.STRING,
    Telefono: DataTypes.STRING
}, {
    timestamps: false,
    tableName: 'Usuarios'
});

User.belongsTo(Client, { foreignKey: 'Cliente_Id' });

module.exports = User;
