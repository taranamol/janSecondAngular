// models/question.js
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MessageSchema = new Schema({
  author: String,
  message: String
});

var Message = mongoose.model('Message', MessageSchema);

module.exports = Message;