const express = require('express')
const { doFetchQuizSetting,doUpdateQuizSetting, doverifyPassword, doFetchQuizInstructions, doUpdateQuizInstructions } = require('../Controller/quizSettingController')

const app = express.Router();

app.get('/getlink',doFetchQuizSetting);
app.get('/getinstructions',doFetchQuizInstructions);
app.post('/updatelink',doUpdateQuizSetting);
app.post('/updateinstructions',doUpdateQuizInstructions);
app.get('/adminverification',doverifyPassword),

module.exports = app;