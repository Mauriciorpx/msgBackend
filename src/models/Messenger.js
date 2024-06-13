const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Messenger = sequelize.define('Messenger', {
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
    Email: DataTypes.STRING,
    Telefono: DataTypes.STRING
}, {
    timestamps: false,
    tableName: 'Mensajeros'
});

module.exports = Messenger;
