const sumRequestHandler=(req,res)=>{
console.log("in some request",req.url)
const body=[];
req.on('data',(chunk)=>{
  body.push(chunk);
})
req.on('end',()=>{
 const bodyStr= Buffer.concat(body).toString();
 console.log(bodyStr);
 const params= new URLSearchParams(bodyStr)
 const bodyObj=Object.fromEntries(params);
 console.log(bodyObj);
 const result =+bodyObj.first+ +bodyObj.second;
 console.log(result);

res.setHeader('Content-Type','text/html');
 res.write(`
      <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>RESult</title>
</head>
<body>
 




<h1>Your sum is:${result}</h1>





  
</body>
</html>
      
      
 `);
 return res.end();




});





}
module.exports=sumRequestHandler