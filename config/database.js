// config/database.js
const Sequelize = require('sequelize');

const sequelize = new Sequelize('vehicle_booking_system', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // Set to true to enable SQL query logging
});

sequelize.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch((err) => {
  console.error('Unable to connect to the database:', err);
});


module.exports = sequelize;
