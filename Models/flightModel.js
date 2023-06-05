
const mongoose = require('mongoose');

const flightPriceSchema = new mongoose.Schema({
  origin: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  airline: {
    type: String,
    required: true,
  },
});

mongoose.model('FlightPrice', flightPriceSchema);
