// controllers/vehicleController.js
const Joi = require('joi');
const Vehicle = require('../models/vehicle');
const VehicleType = require('../models/vehicleType');

const vehicleSchema = Joi.object({
  numWheels: Joi.number().required(),
  type: Joi.string().required(),
  model: Joi.string().required(),
  vehicleTypeId: Joi.number().required(), // Added for the association
});

async function addVehicle(req, res) {
  try {
    // Validate request payload using Joi schema
    const { error } = vehicleSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // Check if the vehicle type exists
    const vehicleType = await VehicleType.findByPk(req.body.vehicleTypeId);
    if (!vehicleType) {
      return res.status(404).json({ error: 'Vehicle type not found' });
    }

    // Create the vehicle and associate it with the vehicle type
    const vehicle = await Vehicle.create(req.body);
    await vehicle.setVehicleType(req.body.vehicleTypeId);

    return res.status(201).json({ message: 'Vehicle added successfully', vehicle });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  addVehicle,
};
