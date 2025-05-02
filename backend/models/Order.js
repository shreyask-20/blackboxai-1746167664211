const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  gameId: { type: String, required: true },
  type: { type: String, enum: ['purchase', 'return'], required: true },
  amount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', OrderSchema);
