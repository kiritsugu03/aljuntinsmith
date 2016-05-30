var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  deliveryAddress: {
    type: String,
    required: true
  },
  contactNumber: {
    type: String,
    required: true
  }
});

module.exports = CustomerSchema;
