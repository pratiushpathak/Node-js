const path =require('path');
const express=require('express');
const contactroute=express.Router();



contactroute.get("/contact-us",(req,res,next)=>{
console.log("handling for/contact-us get",req.body,req.url,req.method)
res.sendFile(path.join(__dirname,"../","views","form.html"))

})





//contactroute.use(bodyParser.urlencoded());
contactroute.post("/contact-us",(req,res,next)=>{
  console.log("First handling",req.url,req.method,req.body)
  next();
 
  
});



contactroute.post("/contact-us",(req,res,next)=>{
  console.log("handling for/contact-us for POST",req.url,req.method,req.body)
res.sendFile(path.join(__dirname,"../","views","thanks.html"))
  
})



module.exports=contactroute;