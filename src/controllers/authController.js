const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = async (req, res) => {
    try {
        const { Login, Contrasena, Cliente_Id, Direccion, Email, Telefono } = req.body;
        const hashedPassword = await bcrypt.hash(Contrasena, 10);
        const user = await User.create({ Login, Contrasena: hashedPassword, Cliente_Id, Direccion, Email, Telefono });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Error registering user' });
    }
};

exports.login = async (req, res) => {
    try {
        const { Login, Contrasena } = req.body;
        const user = await User.findByPk(Login);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const isValid = await bcrypt.compare(Contrasena, user.Contrasena);
        if (!isValid) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        const token = jwt.sign({ userId: user.Login }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Error logging in' });
    }
};
