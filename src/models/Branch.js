const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Client = require('./Client');

const Branch = sequelize.define('Branch', {
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
    Telefono: DataTypes.STRING
}, {
    timestamps: false,
    tableName: 'Sucursales'
});

Branch.belongsTo(Client, { foreignKey: 'Cliente_Id' });

module.exports = Branch;
