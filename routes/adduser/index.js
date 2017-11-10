var express = require('express');
var router = express.Router();
const Controller = require('./adduser');
/* GET home page. */

router.post('/', Controller.addUser)

module.exports = router;