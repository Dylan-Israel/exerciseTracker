//Required dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require ('cors');
const mongoose = require('mongoose');

//Instantiate app
const app = express();

//Connect to the database
mongoose.connect(process.env.MONGODB_URI  || 'mongodb://localhost/exercise');

//Require mongoDB models
const User = require('./models/user');
const Exercise = require('./models/exercise');

// include middleware
app.use(bodyParser.json());
app.use(cors());

//Allow node to use public resources
app.use(express.static(__dirname + '/public'));

//Add a new user to the database
app.post('/api/newUser/:userName', (req, res, next) => {
  const {userName} = req.params;
  //Creates JSON based off
  const data = new user({
    userName
  });

  //Saves to the user collection
  data.save(err=>{
    if (err) return res.status(500).send({ success: false, message: 'Error saving to database' });
    return res.json({ success: true, data });
  });

});

//Add and return exercise
app.get('/api/exercise/add/:id/:description/:duration/:date', (req, res, next)=>{

});

const port = process.env.PORT || 3000;
app.listen(port, () =>{
  console.log('This shit works on port', port);
});
