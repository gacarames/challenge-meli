const Router = require('express');
const router = Router();

router.use(Router.static('public'));

router.get('/', function (req, res) {
    res.status(200).sendFile('../statics/index.html', { root: __dirname });
});

module.exports = router;
