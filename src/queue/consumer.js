const amqp = require('amqplib');
const Notification = require('../models/Notification');
const sender = require('../services/senderService');
const QUEUE = 'notifications';

(async () => {
    const connection = await amqp.connect(process.env.RABBITMQ_URL);
    const channel = await connection.createChannel();
    await channel.assertQueue(QUEUE);

    channel.consume(QUEUE, async (msg) => {
        const notification = JSON.parse(msg.content.toString());
        try {
            switch (notification.type) {
                case 'email':
                    await sender.sendEmail('user@example.com', notification.message);
                    break;
                case 'sms':
                    await sender.sendSMS('1234567890', notification.message);
                    break;
                case 'inapp':
                    await sender.sendInApp(notification.userId, notification.message);
                    break;
            }
            await Notification.findByIdAndUpdate(notification._id, { status: 'sent' });
        } catch (error) {
            console.error('Failed to send notification:', error);
            await Notification.findByIdAndUpdate(notification._id, { status: 'failed' });
        }
        channel.ack(msg);
    });
})();
