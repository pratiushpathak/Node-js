
//const testingSyntax=require('./syntax')
//const testingSyntax=require('./runtime')
const http=require('http');
//const runtime = require('./runtime');
const requestHandler=require('./user')


//external modules
const express=require('express');
const app=express();



const server=http.createServer(app);
app.use((req,res,next)=>{
  console.log("came in first middle ware",req.url,req.method);
  next();

});
app.use((req,res,next)=>{
  console.log("came in second middle ware",req.url,req.method);

});



const port=3002;
server.listen(port,()=>{

console.log(`Server running on address http://localhost:${port}`)
})