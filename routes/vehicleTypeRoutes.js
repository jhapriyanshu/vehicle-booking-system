// routes/vehicleTypeRoutes.js
const express = require('express');
const router = express.Router();
const vehicleTypeController = require('../controllers/vehicleTypeController');

// Define the add vehicle type route
router.post('/add', vehicleTypeController.addVehicleType);

module.exports = router;
