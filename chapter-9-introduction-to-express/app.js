


//external modules
const express=require('express');
const app=express();



app.get("/",(req,res,next)=>{
  console.log("came in first middle ware",req.url,req.method);
   //res.send("<p>came from first middleware</p")
  next();

});

app.post("/submit-details",(req,res,next)=>{
  console.log("came in second middle ware",req.url,req.method);
  res.send("<p>Welcome to middleware</p")

});



app.use("/",(req,res,next)=>{
  console.log("came in another middle ware",req.url,req.method);
    res.send("<p>came in another middleware</p")
 

});









const port=3002;
app.listen(port,()=>{

console.log(`Server running on address http://localhost:${port}`)
})