var mongoose = require('mongoose');

var TransactionSchema = new mongoose.Schema({
  customer:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer'
  },
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }],
  orderDate: {
    type: Date,
    default: Date.now()
  },
  deliveryDate: {
    type: Date,
    default: Date.now()
  },
  quantity: {
    type: Number,
    required: true
  }
});

module.exports = TransactionSchema;
