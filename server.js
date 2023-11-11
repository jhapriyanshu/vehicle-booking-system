// server.js
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');


const userRoutes = require('./routes/userRoutes');

const bookingRoutes = require('./routes/bookingRoutes');

const vehicleRoutes = require('./routes/vehicleRoutes');

const vehicleTypeRoutes = require('./routes/vehicleTypeRoutes');




const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/booking', bookingRoutes);
app.use('/api/user', userRoutes);
app.use('/api/vehicle', vehicleRoutes);
app.use('/api/vehicletype', vehicleTypeRoutes);




// Start server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
