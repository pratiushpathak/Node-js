const htttp=require('http');
const requestHandler=require('./handler')
const server=htttp.createServer(requestHandler);

const port=3000;
server.listen(port,()=>{

console.log(`Server running on address http://localhost:${port}`)
})