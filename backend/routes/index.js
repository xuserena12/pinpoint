const express = require('express');
const router = express.Router();
const requireAuth = require('../middleware/requireAuth');

const destination_controller = require("../controllers/destinationController");

router.get('/home', requireAuth, destination_controller.destination_list);

router.post('/home', requireAuth, destination_controller.destination_create_post);

router.delete('/home/:id', requireAuth, destination_controller.destination_delete_post);

module.exports = router;
