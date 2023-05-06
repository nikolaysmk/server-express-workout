const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
    res.send(`<h1>${req.baseUrl} works</h1>`)
}

);

module.exports = router;