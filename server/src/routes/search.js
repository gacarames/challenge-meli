const Router = require('express');
const router = Router();
const search = require('../controllers/search');

router.get('/items', search);

module.exports = router;
