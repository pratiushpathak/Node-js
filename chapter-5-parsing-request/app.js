const http=require('http');
  const userrequestHandler  =require('./user')
const server=http.createServer(userrequestHandler);
const port=3002;
server.listen(port,()=>{
  console.log(`Server running on address http://localhost:${port}`)
});