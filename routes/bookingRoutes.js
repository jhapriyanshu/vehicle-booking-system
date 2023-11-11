// routes/bookingRoutes.js
const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Define the submit booking route
router.post('', bookingController.submitBooking);

module.exports = router;
