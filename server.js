//we have set 'dependencies',this is call dependencies
//express is instal via node
const express = require('express');

//setting our app as express
const app = express();

//We are setting as a variable to our server
const Fruits = require('./models/fruits.js');
//All above is call dependencies


//setting our port to 3000
const port = 3004;

//All these below is a middleware (middleware is a code which is bridging gap between 2 files)
app.use(express.static('public')); //here you call the global folder name

const fruitcontroller = require('./controllers/fruits.js');

app.use('/', fruitcontroller);
//All these above is a middleware


//adding a port listner, to host tempory to tempory data
// //short hand for fucnction () =>
app.listen(port, () => {
  console.log('listening to port');
})
