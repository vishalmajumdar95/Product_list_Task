
const express = require('express');
router = express.Router();
require('../Database/db')
const productData = require('../model/dbModel');


router.get("/product",(req,res)=>{
    page = req.query.page
    if (!(page)|| page < 0){
      page = 1
    }
    product_no = (page-1)*10
    productData .find().skip(product_no).limit(10).then(
        data =>{
            console.log(data);
            res.send(data)
        }
    ).catch(err=>{
        console.log(err);
        res.send(err)
    })
  })

module.exports = router