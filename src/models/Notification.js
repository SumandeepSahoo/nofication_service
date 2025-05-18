const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    type: { type: String, enum: ['email', 'sms', 'inapp'], required: true },
    message: { type: String, required: true },
    status: { type: String, enum: ['pending', 'sent', 'failed'], default: 'pending' }
}, { timestamps: true });

module.exports = mongoose.model('Notification', notificationSchema);
