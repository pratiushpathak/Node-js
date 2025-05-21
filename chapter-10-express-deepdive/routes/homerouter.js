//core module
const path= require('path');
//external module
const express=require('express');
const homeRouter=express.Router();


homeRouter.get("/",(req,res,next)=>{
console.log("handling for/ get",req.url,req.method)
res.sendFile(path.join(__dirname,"../","views","welcome.html"))
//next();
})
module.exports=homeRouter

