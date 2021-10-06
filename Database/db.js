const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/products")
.then(()=>{
    console.log('connetion sucessfully');
}).catch((err)=>{
    console.log('something issue\n',err)
})