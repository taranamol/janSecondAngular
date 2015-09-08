// server.js

// require express and other modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),  // for data from the request body
    mongoose = require('mongoose')      // to interact with our db
    Message = require('./models/message');

// connect to mongodb
mongoose.connect(
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/jansecond'
);

// configure body-parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//// API ROUTES

// send back all messages
app.get('/messages', function (req, res) {
  Message.find({}, function (err, posts) {
    res.json(messages);
  });
});

// create new question
app.post('/messages', function (req, res) {
  // create new question with data from the body of the request (`req.body`)
  // body should contain the question text itself
  var newMessage = new Message(req.body);

  // save new question
  newMessage.save(function (err, savedMessage) {
    if (err) {
      res.status(422).send(err.errors.text.message);
    } else {
      res.json(savedMessage);
    }
  });
});

// set location for static files
app.use(express.static(__dirname + '/public'));

// load public/index.html file (angular app)
app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/views/index.html');
});


// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('server started on localhost:3000');
});