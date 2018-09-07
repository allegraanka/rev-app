const express = require('express');
const router = express.Router();

router
  .route('/json')
  .get(function(req, res) {
    console.log('GET json data');
    res
    .status(200)
    .json({"jsonData" : true});
  })
  .post(function(req, res) {
    console.log('POST json data');
    res
    .status(200)
    .json({"jsonData" : "POST request received"});
  });

module.exports = router;
