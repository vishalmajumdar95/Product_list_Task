const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(express.json())
app.use(morgan('dev'))
const router = require('./routes/product')
app.use('/',router)





const Port = 2021
app.listen(Port,()=>{
    console.log(`server conneted on port ${Port}`);
})