
//const testingSyntax=require('./syntax')
//const testingSyntax=require('./runtime')
const http=require('http');
//const runtime = require('./runtime');


const requestHandler=require('./user');
const calculatearea=require('./practiceset');

//const server=http.createServer(requestHandler);

// const server=htttp.createServer((req,res)=>{
//   console.log(req.url,req.method);
//   //testingSyntax();
//   runtime()
// });
const server= http.createServer((req,res)=>{
  calculatearea()
})

const port=3002;
server.listen(port,()=>{

console.log(`Server running on address http://localhost:${port}`)
})