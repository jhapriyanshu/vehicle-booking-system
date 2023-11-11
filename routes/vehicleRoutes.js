// routes/vehicleRoutes.js
const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

// Define the add vehicle route
router.post('/add', vehicleController.addVehicle);

module.exports = router;
