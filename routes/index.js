const express = require('express');
const router = express.Router();

const model = require('../models/index');

router.get('/', (req, res) => {
    const text = model.hello();
    res.send(text);
});


module.exports = router;
