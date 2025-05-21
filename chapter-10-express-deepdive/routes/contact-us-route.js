const path =require('path');
const express=require('express');
const contactroute=express.Router();
const rootDir=require("../utils/pathutils");



contactroute.get("/contact-us",(req,res,next)=>{
console.log("handling for/contact-us get",req.body,req.url,req.method)
res.sendFile(path.join(rootDir,"views","form.html"))

})





//contactroute.use(bodyParser.urlencoded());
contactroute.post("/contact-us",(req,res,next)=>{
  console.log("First handling",req.url,req.method,req.body)
  next();
 
  
});



contactroute.post("/contact-us",(req,res,next)=>{
  console.log("handling for/contact-us for POST",req.url,req.method,req.body)
res.sendFile(path.join(rootDir,"views","thanks.html"))
  
})



module.exports=contactroute;