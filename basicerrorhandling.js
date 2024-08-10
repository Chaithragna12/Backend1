const express=require('express');
const app=express();

app.get('/error',(req,res,next)=>{
    const err=new Error('something went wrong');
    err.status=500;
    next(err);
})

app.use((err,req,res,next)=>{
    res.status(err.status||500);
    res.json({
        error:{
            message:err.message
        } 
    })
})
app.get('/',(req,res)=>{
    res.send('hello,world');
})
const port=3000;
app.listen(port,()=>{
    console.log(`server is running with ${port}`);
})