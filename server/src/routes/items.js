const Router = require('express');
const router = Router();
const getItem = require('../controllers/items');

router.get('/items/:id', getItem);

module.exports = router;
