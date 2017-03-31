//Required dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require ('cors');
const mongoose = require('mongoose');
//Instantiate app
const app = express();
app.use(bodyParser.json());
app.use(cors());
//Require mongoDB models
const user = require('./models/user');
const exercise = require('./models/exercise');
//Connect to the database
mongoose.connect(process.env.MONGODB_URI  || 'mongodb://localhost/exercise');
//Allow node to use public resources
app.use(express.static(__dirname + '/public'));
//Add a new user to the database
app.post('/api/newUser/:userName', (req, res, next)=>{
var {userName} = req.params;
//Creates JSON based off 
var data = new user({
userName
});
//Saves to the user collection
data.save(err=>{
    if(err){
        return res.send('Error saving to database');
    }
    return res.json(data);
});

});

//Add and return exercise 
app.get('/api/exercise/add/:id/:description/:duration/:date', (req, res, next)=>{

});

app.listen(process.env.PORT || 3000, () =>{
    console.log('This shit works');
});