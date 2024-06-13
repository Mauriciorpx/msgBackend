const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Client = sequelize.define('Client', {
    Identificacion: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Direccion: DataTypes.STRING,
    Ciudad: DataTypes.STRING,
    Email: DataTypes.STRING,
    Telefono: DataTypes.STRING
}, {
    timestamps: false,
    tableName: 'Clientes'
});

module.exports = Client;
