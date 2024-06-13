const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');
const Messenger = require('./Messenger');

const Service = sequelize.define('Service', {
    Codigo: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Fecha_Hora_Solicitud: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    Origen: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Destino: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Ciudad: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Descripcion: DataTypes.TEXT,
    Tipo_Transporte: {
        type: DataTypes.ENUM('moto', 'carro', 'camion'),
        allowNull: false
    },
    Numero_Paquetes: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'Servicios'
});

Service.belongsTo(User, { foreignKey: 'Usuario_Login' });
Service.belongsTo(Messenger, { foreignKey: 'Mensajero_Id' });

module.exports = Service;
