// controllers/vehicleTypeController.js
const Joi = require('joi');
const VehicleType = require('../models/vehicleType');

const vehicleTypeSchema = Joi.object({
  name: Joi.string().required(),
});

async function addVehicleType(req, res) {
  try {
    // Validate request payload using Joi schema
    const { error } = vehicleTypeSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // Check if the vehicle type with the same name already exists
    const existingVehicleType = await VehicleType.findOne({
        where: {
          name: req.body.name,
        },
      });
  
      if (existingVehicleType) {
        return res.status(400).json({ error: 'Vehicle type with the same name already exists.' });
      }

    // Create the vehicle type
    const vehicleType = await VehicleType.create(req.body);

    return res.status(201).json({ message: 'Vehicle type added successfully', vehicleType });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  addVehicleType,
};
