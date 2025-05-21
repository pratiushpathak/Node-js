//core module
const path= require('path');
//external module
const express=require('express');
const homeRouter=express.Router();


homeRouter.get("/",(req,res,next)=>{
console.log("handling for/ get",req.url,req.method)
res.send(`<h1>welcome to backend</h1>`)
next();
})
module.exports=homeRouter

