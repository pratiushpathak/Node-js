//core modules
const path=require('path');
//external modules
const express= require('express');
const userRouter=express.Router();
//local module
const rootDir=require("../utils/pathutil");



userRouter.get("/",(req,res,next)=>{

  res.sendFile(path.join(rootDir,"views","home.html"))
})


module.exports=userRouter;
