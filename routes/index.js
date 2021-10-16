var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/testmain', async (req, res) => {
  const { Person } = req.models;

  const people = await Person.query();

  res.json({
    people
  });
});

router.post('/testmain', async (req, res) => {
  const users = "";

  res.json({
    users
  });
});


router.get('/testdb', async (req, res) => {
  const { Place } = req.models;
  const data = await Place.query();

  res.json({
    data
  });
});

module.exports = router;
