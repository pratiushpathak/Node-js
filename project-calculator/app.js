const http=require('http');
const requestListener=require('./calculator')
  // const userrequestHandler  =require('./user')
const server=http.createServer(requestListener);
const port=3002;
server.listen(port,()=>{
  console.log(`Server running on address http://localhost:${port}`)
});