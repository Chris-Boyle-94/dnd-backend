const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).json({ message: 'looking good' });
});


router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status).json({
        message: err.message,
        stack: err.stack,
    });
});

module.exports = router;