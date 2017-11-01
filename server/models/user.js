const mongoose = require('mongoose');


var user = mongoose.model('User', {
  text: {
    type: String,
    required: true,
    maxlength: 255,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

module.exports = {user};
