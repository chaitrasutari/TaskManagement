const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
  notificationId: { type: String, required: true, unique: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Notification', NotificationSchema);
