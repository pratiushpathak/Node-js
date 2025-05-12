const http=require('http');
function requestListener(req,res)
{
  console.log(req.url,req.method,req.headers);
  if(req.url==='/')
  {
    res.setHeader('Content-Type','text/html');
  res.write('<html>');
   res.write(' <head><title>Document</title></head> ')
   res.write('<body> <h1>welcome to Home</h1> </body>')
  res.write('</html>')
  res.end();


  }else if(req.url==='/products'){
    res.setHeader('Content-Type','text/html');
  res.write('<html>');
   res.write(' <head><title>Document</title></head> ')
   res.write('<body> <h1>Checkout our products</h1> </body>')
  res.write('</html>')
  res.end();


  }
  else
  {
    res.setHeader('Content-Type','text/html');
  res.write('<html>');
   res.write(' <head><title>Document</title></head> ')
   res.write('<body> <h1>welcome to fisrst backend</h1> </body>')
  res.write('</html>')
 return res.end();


  }
  
 

}
const server=http.createServer(requestListener);

const port=3002;
server.listen(port,()=>{
  console.log(`Server running on address http://localhost:${port}`)
});