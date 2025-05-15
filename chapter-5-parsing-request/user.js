const http=require('http');
const fs=require('fs');
function requestListener(req,res)
{
  console.log(req.url,req.method);
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
    const body=[];

    //buffering of chunks
    req.on('data',(chunk)=>{
     console.log(chunk);
     body.push(chunk);
    });
    req.on('end',()=>{
      const fullBody=Buffer.concat(body).toString()
      console.log(fullBody);
      //output username=Pratiush+Pathak&gender=male
      const bodyObject={};
     const params=new URLSearchParams(fullBody)
     for(const[key,val] of params.entries())
     {
       bodyObject[key]=val;
     }
     console.log(bodyObject);
    //output { username: 'Pratiush Pathak', gender: 'male' }
    })


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