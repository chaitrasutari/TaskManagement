const mongoose = require('mongoose');

const UpdateSchema = new mongoose.Schema({
  updateId: { type: String, required: true, unique: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Update', UpdateSchema);
