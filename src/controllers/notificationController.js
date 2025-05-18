const Notification = require('../models/Notification');
const queue = require('../queue/producer');

exports.sendNotification = async (req, res) => {
    const { userId, type, message } = req.body;
    try {
        const notification = await Notification.create({ userId, type, message });
        await queue.sendToQueue(notification);
        res.status(200).json({ message: 'Notification queued', notification });
    } catch (err) {
        res.status(500).json({ error: 'Failed to send notification' });
    }
};

exports.getUserNotifications = async (req, res) => {
    const { id } = req.params;
    try {
        const notifications = await Notification.find({ userId: id });
        res.json(notifications);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching notifications' });
    }
};
