// models/index.js
const User = require('./user');
const VehicleType = require('./vehicleType');
const Vehicle = require('./vehicle');
const Booking = require('./booking');

// Define relationships
User.hasMany(Booking);
Booking.belongsTo(User);

VehicleType.hasMany(Vehicle, { as: 'vehicles', foreignKey: 'vehicleTypeId' });
Vehicle.belongsTo(VehicleType, { as: 'vehicleType', foreignKey: 'vehicleTypeId' });

Vehicle.hasMany(Booking);
Booking.belongsTo(Vehicle);

module.exports = {
  User,
  VehicleType,
  Vehicle,
  Booking,
};
