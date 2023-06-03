
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routers');

//require('dotenv').config();

const port = process.env.port || 7000;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use('/', router);

module.exports.startServer= async ()=> {
    try {
       await mongoose.connect('mongodb://127.0.0.1:27017/todo_app');
        console.log('sucessfully connected with database :: mongodb!');

        app.listen(port, (err) =>{
            if(err) {
                throw new Error(err);
            }
            console.log(` server starts at port :: ${port}`);
        })


    } catch (error) {
        console.log('error',error);
    }
}