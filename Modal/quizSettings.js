const mongoose = require('mongoose');

const quizSettingsSchema = new mongoose.Schema({
  formUrl: {
    type: String,
    required: true,
  },
  timerDuration: {
    type: Number,
    required: true,
    default: 600, // Default to 10 minutes
  },
  key : {
    type : String,
  }
  
},
{
    versionKey:false
}
);

module.exports = mongoose.model('QuizSettings', quizSettingsSchema);
