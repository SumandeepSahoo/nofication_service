const express = require('express');
const notificationRoutes = require('./routes/notificationRoutes');

const app = express();
app.use(express.json());

app.use('/notifications', notificationRoutes);
app.use('/users', notificationRoutes);

require('./queue/consumer');

module.exports = app;
