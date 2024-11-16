const express = require('express')
const cors  = require('cors')
var bodyparser = require("body-parser");
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const app = express();

const quizSettingRouter = require('./Router/quizSettingRouter')

dotenv.config();
app.use(cors());
app.use(bodyparser.json());
app.use(express.urlencoded(true));
app.listen(2002, () => {
    console.log("Om Shanti Server Started on port 2002")
});

const server = process.env.dbUrl;
mongoose
.connect(server)
.then(() => {
    console.log("Database Connected ⭐")
})
.catch((err)=> console.log(err));

app.use('/adminsetting',quizSettingRouter);