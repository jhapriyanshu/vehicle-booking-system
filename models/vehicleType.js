// models/VehicleType.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const VehicleType = sequelize.define('VehicleType', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = VehicleType;
