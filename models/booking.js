// models/Booking.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Booking = sequelize.define('Booking', {

  startDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  UserId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  VehicleId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

module.exports = Booking;
