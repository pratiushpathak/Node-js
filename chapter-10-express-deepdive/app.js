


const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const homeRouter=require('./routes/homerouter')
const contactroute=require('./routes/contact-us-route')

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


app.use(express.urlencoded());
app.use(homeRouter);
app.use(contactroute);




const port=3005;
app.listen(port,()=>{
  console.log(`Server running on address http://localhost:${port}`)

})