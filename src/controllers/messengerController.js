const Messenger = require('../models/Messenger');

exports.createMessenger = async (req, res) => {
    try {
        const messenger = await Messenger.create(req.body);
        res.status(201).json(messenger);
    } catch (error) {
        res.status(500).json({ error: 'Error creating messenger' });
    }
};

exports.getAllMessengers = async (req, res) => {
    try {
        const messengers = await Messenger.findAll();
        res.json(messengers);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching messengers' });
    }
};
