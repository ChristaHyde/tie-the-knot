const mongoose = require('mongoose')

const venueSchema = new mongoose.Schema({
  venueId: {
    type: String
  },
  name: {
    type: String
  },
  userId: {
    type: String
  },
  lat: {
    type: String
  },
  lng: {
    type: String
  },
  description: {
    type: String
  },
  checked: {
    type: Boolean
  }
});

const Venue = mongoose.model('Venue', venueSchema);

module.exports = Venue