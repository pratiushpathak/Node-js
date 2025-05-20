


const express=require('express');
const app=express();

app.use("/",(req,res,next)=>{
console.log("first dummy middleware",req.url,req.method)
next();
})


app.use("/",(req,res,next)=>{
console.log("second dummy middleware",req.url,req.method)
next();
})


// app.use("/",(req,res,next)=>{
// console.log("third middleware",req.url,req.method)
// res.send("<h1>this is response</h1>")
// next();
// })

app.get("/",(req,res,next)=>{
console.log("handling for/ get",req.url,req.method)
res.send(`<h1>welcome to backend</h1>`)
next();
})

app.get("/contact-us",(req,res,next)=>{
console.log("handling for/contact-us get",req.url,req.method)
res.send(`<h1>please give us your details here</h1>
  <form action="/contact-us" method="POST">
    <label for="name">name</label>
  <input type="text" placeholder="name">
  <br>
  <label for="email">email</label>
  <input type="email" placeholder="enter your email">
  <input type="Submit" >

    
   


  </form>
  
  `)

})
app.post("/contact-us",(req,res,next)=>{
  console.log("handling for/contact-us for POST",req.url,req.method)
  res.send('<h1>Thanks for your details</h1>')
  
})


const port=3002;
app.listen(port,()=>{
  console.log(`Server running on address http://localhost:${port}`)

})