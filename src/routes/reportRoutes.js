const express = require('express');
const { getOrdersByClientAndMonth, getOrdersByMessengerAndMonth } = require('../controllers/reportController');

const router = express.Router();

router.get('/client', getOrdersByClientAndMonth);
router.get('/messenger', getOrdersByMessengerAndMonth);

module.exports = router;
