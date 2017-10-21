const express = require('express');
const router = express.Router();
const Controller = require('./viewlist');

router.get('/', Controller.getList);
router.post('/', Controller.insertList);
router.put('/:id', Controller.editList);
router.delete('/:id', Controller.deleteList);

module.exports = router;