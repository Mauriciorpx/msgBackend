const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Service = require('./Service');

const ServiceState = sequelize.define('ServiceState', {
    Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Estado: {
        type: DataTypes.ENUM('solicitado', 'recogido por el mensajero', 'entregado'),
        allowNull: false
    },
    Fecha_Hora: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    Foto: DataTypes.BLOB
}, {
    timestamps: false,
    tableName: 'Estados_Servicio'
});

ServiceState.belongsTo(Service, { foreignKey: 'Servicio_Codigo' });

module.exports = ServiceState;
