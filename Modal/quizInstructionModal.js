const mongoose = require('mongoose');

const instructionSchema = new mongoose.Schema({
  
  instructions : {
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

module.exports = mongoose.model('quizinstructions', instructionSchema);
