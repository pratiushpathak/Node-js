
//const testingSyntax=require('./syntax')
//const testingSyntax=require('./runtime')
const http=require('http');
//const runtime = require('./runtime');
const requestHandler=require('./user')


//external modules
const express=require('express');
const app=express();



const server=http.createServer(app);




const port=3002;
server.listen(port,()=>{

console.log(`Server running on address http://localhost:${port}`)
})