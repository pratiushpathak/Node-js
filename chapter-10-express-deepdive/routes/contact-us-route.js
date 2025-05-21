const path =require('path');
const express=require('express');
const contactroute=express.Router();



contactroute.get("/contact-us",(req,res,next)=>{
console.log("handling for/contact-us get",req.body,req.url,req.method)
res.send(`<h1>please give us your details here</h1>
  <form action="/contact-us" method="POST">
    <label for="name">name</label>
 <input type="text" name="name" placeholder="name">
  <br>
  <label for="email">email</label>
<input type="email" name="email" placeholder="enter your email">
  <input type="Submit" >

    
   


  </form>
  
  `)

})





//contactroute.use(bodyParser.urlencoded());
contactroute.post("/contact-us",(req,res,next)=>{
  console.log("First handling",req.url,req.method,req.body)
  next();
 
  
});



contactroute.post("/contact-us",(req,res,next)=>{
  console.log("handling for/contact-us for POST",req.url,req.method,req.body)
  res.send('<h1>Thanks for your details</h1>')
  
})



module.exports=contactroute;