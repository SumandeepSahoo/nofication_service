const amqp = require('amqplib');
const QUEUE = 'notifications';

let channel;
async function connectQueue() {
    const connection = await amqp.connect(process.env.RABBITMQ_URL);
    channel = await connection.createChannel();
    await channel.assertQueue(QUEUE);
}
connectQueue();

exports.sendToQueue = async (notification) => {
    if (channel) {
        channel.sendToQueue(QUEUE, Buffer.from(JSON.stringify(notification)));
    }
};
