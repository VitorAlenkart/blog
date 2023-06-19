const express = require('express');
const router = express.Router();

router.get('/article', (req,res) => {
    res.send('ola')
})

module.exports = router;