const http=require('http');
const fs=require('fs');
function requestListener(req,res)
{
  console.log(req.url,req.method,req.headers);
  if(req.url==='/')
  {
    res.setHeader('Content-Type','text/html');
  res.write('<html>');
   res.write(' <head><title>Document</title></head> ')
   res.write('<body> <h1>Enter your Your Details:</h1> ')
   res.write('<form action="/submit-details" method="POST"')
   res.write('<form>');
  
  res.write('<input type="text" name="username" placeholder="Enter your name"><br>')

  res.write('<label for="male">male</label>')
  res.write('<input type="radio" name="gender" id="male" value="male">')

  res.write('<label for="female">female</label>')
  res.write('<input type="radio" name="gender" id="female" value="female">')
  res.write('<input type="submit" value="submit">')
   res.write('</form>');
    

   res.write('</body>')
  res.write('</html>')
  res.end();


  }
  else if(req.url.toLowerCase()==='/submit-details'&& req.method=="POST")
  {

   

    fs.writeFileSync('user.txt','Pratiush pathak')
    res.statusCode=302;//code for changimg location
    res.setHeader('Location','/');
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