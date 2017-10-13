var express = require('express');
var bodyParser = require('body-parser');

var mongoose   = require('mongoose');

var database = require('./config/database');

var app = express();

//connect to our database
mongoose.connect(database.url);

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.use(function(req, res, next) {
  if(req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static('public'));

app.use('/api', require('./routes'));

app.listen(PORT, function(){
  console.log('Express server is up on port ' + PORT);
});
