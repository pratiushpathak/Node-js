const express=require('express');
const app=express();



app.use((req,res,next)=>{
  console.log(req.url,req.method)
  next()
})


app.get("/contact-us",(req,res)=>{
  res.send(`
    
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <form action="/submit" method="POST">
    <label for="name">name</label>
  <input type="text" placeholder="name">
  <br>
  <label for="email">email</label>
  <input type="text" placeholder="enter your email">
  <input type="submit" value="submit">

    
   


  </form>
  
</body>
</html>
    `)
    

})
app.post("/submit",(req,res)=>{
  console.log("form submitted")
  res.send('<p>your form is submitted</p>');

})
app.get("/", (req, res) => {
  res.send('<p>sending first response</p>');
});



const port=3002;
app.listen(port,()=>{
  console.log(`Server running on address http://localhost:${port}`)

})
