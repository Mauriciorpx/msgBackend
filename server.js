const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const sequelize = require('./src/config/db');
const createDefaultData = require('./src/utils/createDefaultData');
const cors = require('cors'); // Importar el middleware cors

// Load environment variables from .env file
dotenv.config();

// Import routes
const authRoutes = require('./src/routes/authRoutes');
const clientRoutes = require('./src/routes/clientRoutes');
const messengerRoutes = require('./src/routes/messengerRoutes');
const orderRoutes = require('./src/routes/orderRoutes');
const reportRoutes = require('./src/routes/reportRoutes');

// Import models (for syncing)
const Client = require('./src/models/Client');
const Branch = require('./src/models/Branch');
const User = require('./src/models/User');
const Messenger = require('./src/models/Messenger');
const Service = require('./src/models/Service');
const ServiceState = require('./src/models/ServiceState');
const MessengerClient = require('./src/models/MessengerClient');

// Initialize Express app
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/messengers', messengerRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/reports', reportRoutes);

// Sync database and start server
const PORT = process.env.PORT || 3000;
sequelize.sync({ force: true }).then(async () => {
    console.log('Database & tables created!');
    await createDefaultData();
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
