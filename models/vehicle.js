// models/Vehicle.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Vehicle = sequelize.define('Vehicle', {
  model: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  numWheels: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  vehicleTypeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Vehicle;
