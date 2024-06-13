const Client = require('../models/Client');
const Branch = require('../models/Branch');
const User = require('../models/User');
const Messenger = require('../models/Messenger');
const MessengerClient = require('../models/MessengerClient');

const createDefaultData = async () => {
    await Client.bulkCreate([
        { Nombre: 'Cliente 1', Direccion: 'Direccion 1', Ciudad: 'Ciudad 1', Email: 'cliente1@example.com', Telefono: '123456789' },
        { Nombre: 'Cliente 2', Direccion: 'Direccion 2', Ciudad: 'Ciudad 2', Email: 'cliente2@example.com', Telefono: '987654321' }
    ]);

    await Messenger.bulkCreate([
        { Nombre: 'Mensajero 1', Direccion: 'Direccion 1', Email: 'mensajero1@example.com', Telefono: '123456789' },
        { Nombre: 'Mensajero 2', Direccion: 'Direccion 2', Email: 'mensajero2@example.com', Telefono: '987654321' }
    ]);

    await Branch.bulkCreate([
        { Cliente_Id: 1, Nombre: 'Sucursal 1', Direccion: 'Direccion 1', Telefono: '123456789' },
        { Cliente_Id: 2, Nombre: 'Sucursal 2', Direccion: 'Direccion 2', Telefono: '987654321' }
    ]);

    await User.bulkCreate([
        { Login: 'user1', Contrasena: 'password1', Cliente_Id: 1, Direccion: 'Direccion 1', Email: 'user1@example.com', Telefono: '123456789' },
        { Login: 'user2', Contrasena: 'password2', Cliente_Id: 2, Direccion: 'Direccion 2', Email: 'user2@example.com', Telefono: '987654321' }
    ]);
};

module.exports = createDefaultData;
