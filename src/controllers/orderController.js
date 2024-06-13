const Service = require('../models/Service');
const ServiceState = require('../models/ServiceState');

exports.createOrder = async (req, res) => {
    try {
        const order = await Service.create(req.body);
        await ServiceState.create({ Servicio_Codigo: order.Codigo, Estado: 'solicitado' });
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ error: 'Error creating order' });
    }
};

exports.updateOrderStatus = async (req, res) => {
    try {
        const { Servicio_Codigo, Estado, Foto } = req.body;
        const order = await Service.findByPk(Servicio_Codigo);
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }

        await ServiceState.create({ Servicio_Codigo, Estado, Foto, Fecha_Hora: new Date() });
        res.json({ message: 'Order status updated' });
    } catch (error) {
        res.status(500).json({ error: 'Error updating order status' });
    }
};

exports.getOrderStatus = async (req, res) => {
    try {
        const states = await ServiceState.findAll({ where: { Servicio_Codigo: req.params.Codigo } });
        res.json(states);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching order status' });
    }
};
