const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
  res.render('main'); // (3)
});
router.get('/about', (req, res) => {
  res.render('about'); // (4)
});
module.exports = router;