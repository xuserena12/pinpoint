var express = require('express');
var router = express.Router();

const destination_controller = require("../controllers/destinationController");

/* GET home page. */

router.get('/', destination_controller.destination_list);

router.get('/api', destination_controller.destination_list);

// router.post("/", destination_controller.destination_create_post);


module.exports = router;
