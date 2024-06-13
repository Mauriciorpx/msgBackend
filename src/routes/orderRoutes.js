const express = require('express');
const { createOrder, updateOrderStatus, getOrderStatus } = require('../controllers/orderController');

const router = express.Router();

router.post('/', createOrder);
router.put('/status', updateOrderStatus);
router.get('/:Codigo/status', getOrderStatus);

module.exports = router;
