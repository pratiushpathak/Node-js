const htttp=require('http');
const server=htttp.createServer((req,res)=>{
  console.log(req);
});

const port=3002;
server.listen(port,()=>{

console.log(`Server running on address http://localhost:${port}`)
})