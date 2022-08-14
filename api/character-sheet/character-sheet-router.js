const router = require('express').Router();
const characterSheet = require('./character-sheet-model')


router.get('/', async (req, res, next) => {
    try {
        const response = await characterSheet.getCharacter()
        res.status(200).json(response)
    } catch (error) {
        next(error)
    }
});


router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status).json({
        message: err.message,
        stack: err.stack,
    });
});

module.exports = router;