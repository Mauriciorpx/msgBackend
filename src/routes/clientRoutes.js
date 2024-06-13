const express = require('express');
const { createClient, getAllClients } = require('../controllers/clientController');

const router = express.Router();

router.post('/', createClient);
router.get('/', getAllClients);

module.exports = router;
