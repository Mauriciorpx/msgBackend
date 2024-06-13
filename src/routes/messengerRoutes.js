const express = require('express');
const { createMessenger, getAllMessengers } = require('../controllers/messengerController');

const router = express.Router();

router.post('/', createMessenger);
router.get('/', getAllMessengers);

module.exports = router;
