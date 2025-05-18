const sumRequestHandler=(req,res)=>{
console.log("1.in some request",req.url)
const body=[];
let result;
req.on('data',(chunk)=>{
  body.push(chunk);
  console.log("2.chunk came");
})
req.on('end',()=>{
   console.log("3.End event came");
 const bodyStr= Buffer.concat(body).toString();
 console.log(bodyStr);
 const params= new URLSearchParams(bodyStr)
 const bodyObj=Object.fromEntries(params);
 console.log(bodyObj);
 result =+bodyObj.first+ +bodyObj.second;
 console.log(result);






});


console.log("4.sending the response");
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





}
module.exports=sumRequestHandler