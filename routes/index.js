const express = require('express');
const router = express.Router();
const covid = require('../lib/covid-data');

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    let async_data = await covid.run();
    res.render('index', { title: 'Express', async_data});
  } catch (err) {
    res.status(err)
    console.log("Caught error! " + err.message);
  }

});

module.exports = router;
