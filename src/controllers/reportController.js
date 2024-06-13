const { Op } = require('sequelize');
const Service = require('../models/Service');
const { generatePdf } = require('../utils/generatePdf');

exports.getOrdersByClientAndMonth = async (req, res) => {
    try {
        const { clientId, month } = req.query;
        const orders = await Service.findAll({
            where: {
                Cliente_Id: clientId,
                Fecha_Hora_Solicitud: {
                    [Op.between]: [new Date(`${month}-01`), new Date(`${month}-31`)]
                }
            }
        });
        const pdf = generatePdf(orders);
        res.contentType('application/pdf');
        res.send(pdf);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching orders' });
    }
};

exports.getOrdersByMessengerAndMonth = async (req, res) => {
    try {
        const { messengerId, month } = req.query;
        const orders = await Service.findAll({
            where: {
                Mensajero_Id: messengerId,
                Fecha_Hora_Solicitud: {
                    [Op.between]: [new Date(`${month}-01`), new Date(`${month}-31`)]
                }
            }
        });
        const pdf = generatePdf(orders);
        res.contentType('application/pdf');
        res.send(pdf);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching orders' });
    }
};
