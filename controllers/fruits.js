const express = require('express')

const router = express.Router();

const Fruits = require('../models/fruits.js');
//setting a response
router.get('/', (request, response) => {
  response.render('index.ejs', {
    Fruits : Fruits //This key can be anything but the value have to be exactly the same as the const you have set up above
  })
});

router.get('/:index',(request, response) => {
  response.render('show.ejs',{
    Fruit: Fruits[request.params.index] //the name of the param have to be the same as the one set in the request :/name
  })
})


module.exports = router;
