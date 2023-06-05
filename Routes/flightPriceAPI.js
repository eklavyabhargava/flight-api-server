const express = require('express');
const mongoose = require('mongoose');
const FlightPrice = mongoose.model('FlightPrice') // Import the FlightPrice model

const router = express.Router();

// API endpoint to fetch flight prices between two cities
router.get('/flight-prices', async (req, res) => {
    const { origin, destination } = req.query;

    if (!origin || !destination) {
        return res.status(400).json({ error: "Please provide origin and destination" });
    }

    try {
        // Query the FlightPrice model for matching flight prices
        const flightPrices = await FlightPrice.find({
            origin: origin,
            destination: destination,
        });

        if (flightPrices <= 0) {
            return res.status(404).json({error: "There is no flight between given origin and destination"});
        }

        // Return the flight prices in the API response
        res.status(200).json(flightPrices);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: 'Internal Error Occurred' });
    }
});

module.exports = router;
