const http=require('http');
function requestListener(req,res)
{
  console.log(req);
  process.exit();//stops  event loop
 

}
const server=http.createServer(requestListener);

const port=3002;
server.listen(port,()=>{
  console.log(`Server running on address http://localhost:${port}`)
});