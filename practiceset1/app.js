const http=require('http');
function requestListener(req,res)
{
  console.log(req);
  if(req.url==='/')
  {
    
     res.setHeader('Content-Type','text/html');
  res.write('<html>');
   res.write(' <head><title>Document</title></head> ')
   res.write('<body> ')

   res.write('<ul>')

res.write('<li><a href="/home">Home</a></li>');
res.write('<li><a href="/men">Men</a></li>');
res.write('<li><a href="/women">Women</a></li>');
res.write('<li><a href="/kids">Kids</a></li>');
res.write('<li><a href="/cart">Cart</a></li>');

   res.write('</ul>')



   res.write('</body>');
  res.write('</html>')
  res.end();

  }
  else if(req.url ==='/home')
  {
     res.setHeader('Content-Type','text/html');
  res.write('<html>');
   res.write(' <head><title>Document</title></head> ')
   res.write('<body> <h1>welcome to Home</h1> </body>')
  res.write('</html>')
  res.end();

  }
   else if(req.url ==='/men')
  {
     res.setHeader('Content-Type','text/html');
  res.write('<html>');
   res.write(' <head><title>Document</title></head> ')
   res.write('<body> <h1>welcome to men section</h1> </body>')
  res.write('</html>')
  res.end();

  }
    else if(req.url ==='/women')
  {
     res.setHeader('Content-Type','text/html');
  res.write('<html>');
   res.write(' <head><title>Document</title></head> ')
   res.write('<body> <h1>welcome to  women section</h1> </body>')
  res.write('</html>')
  res.end();

  }
    else if(req.url ==='/kids')
  {
     res.setHeader('Content-Type','text/html');
  res.write('<html>');
   res.write(' <head><title>Document</title></head> ')
   res.write('<body> <h1>welcome to Kids section</h1> </body>')
  res.write('</html>')
  res.end();

  }
    else if(req.url ==='/cart')
  {
     res.setHeader('Content-Type','text/html');
  res.write('<html>');
   res.write(' <head><title>Document</title></head> ')
   res.write('<body> <h1>welcome to Cart</h1> </body>')
  res.write('</html>')
  res.end();

  }
 

}
const server=http.createServer(requestListener);

const port=3002;
server.listen(port,()=>{
  console.log(`Server running on address http://localhost:${port}`)
});