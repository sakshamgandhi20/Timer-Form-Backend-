const mongoose = require('mongoose');

const passSchema = new mongoose.Schema({
  
  pass : {
    type : String,
  },
  key : {
    type : String,
  }
  
},
{
    versionKey:false
}
);

module.exports = mongoose.model('passwords', passSchema);
