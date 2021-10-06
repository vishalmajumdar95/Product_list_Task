const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    Product_Name: String,
    Product_Price: Number
})

module.exports = mongoose.model("productData",productSchema)