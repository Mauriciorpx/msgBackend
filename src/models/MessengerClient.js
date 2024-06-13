const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Messenger = require('./Messenger');
const Client = require('./Client');

const MessengerClient = sequelize.define('MessengerClient', {
    Mensajero_Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Messenger,
            key: 'Identificacion'
        }
    },
    Cliente_Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Client,
            key: 'Identificacion'
        }
    }
}, {
    timestamps: false,
    tableName: 'Mensajeros_Clientes'
});

module.exports = MessengerClient;
