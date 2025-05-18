const express = require('express');
const router = express.Router();
const controller = require('../controllers/notificationController');

router.post('/', controller.sendNotification);
router.get('/:id/notifications', controller.getUserNotifications);

module.exports = router;
