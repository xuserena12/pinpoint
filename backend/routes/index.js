var express = require('express');
var router = express.Router();

const destination_controller = require("../controllers/destinationController");

/* GET home page. */

router.get('/', destination_controller.destination_list);


module.exports = router;
