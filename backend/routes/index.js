var express = require('express');
var router = express.Router();

const destination_controller = require("../controllers/destinationController");

router.get('/', destination_controller.destination_list);

router.post('/', destination_controller.destination_create_post);

router.delete('/:id', destination_controller.destination_delete_post);

module.exports = router;
