const sumRequestHandler = require('./sum');
//const requestHandler=require('./sum')

const requestHandler=(req,res)=>{

  console.log(req.url,req.method)
  if(req.url==='/')
  {
     res.setHeader('Content-Type','text/html');
     res.write(`
      <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Practice set</title>
</head>
<body>
 




<h1>Welcome to calculator</h1>
<a href="/calculator">click to go to the calculator page </a>




  
</body>
</html>
      
      
      `);
      return res.end();

  }
else if(req.url.toLowerCase()==='/calculator')
{
  
     res.setHeader('Content-Type','text/html');
     res.write(`
      <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Practice set</title>
</head>
<body>
 




<h1>Here is the Calculator</h1>
<form action="calculate-result" method="POST">
<input class="value1" type="text" placeholder="enter first number" name="first">
<input class="value2" type="text" placeholder="enter second number" name="second">
<input  type="submit" value="Sum">
</form>




  
</body>
</html>
     `)


}
else if(req.url.toLowerCase()==="/calculate-result"&& req.method=='POST'){
 return sumRequestHandler(req,res)

}



  else
  {

  


     res.setHeader('Content-Type','text/html');
     res.write(`
      <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>404 Page Does not exist</title>
</head>
<body>
 




<h1>404 Page Does not exist r</h1>
<a href="/">Go to Home </a>




  
</body>
</html>
      
      
      `);
      return res.end();

  }

}


module.exports=requestHandler;