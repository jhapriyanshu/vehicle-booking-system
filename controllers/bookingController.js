// controllers/bookingController.js
const Joi = require('joi');
const { Op } = require('sequelize');
const { User, Vehicle, Booking } = require('../models');

const bookingSchema = Joi.object({
  userId: Joi.number().required(),
  vehicleId: Joi.number().required(),
  startDate: Joi.date().iso().required(),
  endDate: Joi.date().iso().required(),
});

async function submitBooking(req, res) {
  try {
    // Validate request payload using Joi schema
    const { error } = bookingSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // Check if the vehicle is already booked for the given dates
    const isOverlap = await Booking.findOne({
      where: {
        VehicleId: req.body.vehicleId,
        [Op.or]: [
          {
            startDate: { [Op.between]: [req.body.startDate, req.body.endDate] },
          },
          {
            endDate: { [Op.between]: [req.body.startDate, req.body.endDate] },
          },
        ],
      },
    });

    if (isOverlap) {
      return res.status(400).json({ error: 'Vehicle is already booked for the selected dates.' });
    }

    // Create the booking
    const booking = await Booking.create({
      startDate: req.body.startDate,
      endDate: req.body.endDate,
    });

    // Associate the user, vehicle, and booking
    const user = await User.findByPk(req.body.userId);
    const vehicle = await Vehicle.findByPk(req.body.vehicleId);

    if (!user || !vehicle) {
      return res.status(404).json({ error: 'User or vehicle not found' });
    }

    await booking.setUser(user);
    await booking.setVehicle(vehicle);

    return res.status(201).json({ message: 'Booking successful', booking });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  submitBooking,
};
