const express = require('express')
const { doFetchQuizSetting,doUpdateQuizSetting, doverifyPassword, doFetchQuizInstructions, doUpdateQuizInstructions, doFetchAllAdminSettings } = require('../Controller/quizSettingController')

const app = express.Router();

app.get('/getlink',doFetchQuizSetting);
app.get('/getinstructions',doFetchQuizInstructions);
app.post('/updatelink',doUpdateQuizSetting);
app.post('/updateinstructions',doUpdateQuizInstructions);
app.post('/adminverification',doverifyPassword),
app.get('/alladminsettings',doFetchAllAdminSettings),

module.exports = app;