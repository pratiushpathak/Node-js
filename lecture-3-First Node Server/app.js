const http=require('http');
function requestListener(req,res)
{
  console.log(req);

}
const server=http.createServer(requestListener);
const port=3001;
server.listen(port,()=>{
  console.log(`Server running on address http://localhost:${port}`)
});