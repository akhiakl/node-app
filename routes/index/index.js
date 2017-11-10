var express = require('express');
var router = express.Router();
const Controller = require('./login');
/* GET home page. */
router.get('/', Controller.getIndexPage)

router.post('/', Controller.login)

module.exports = router;
