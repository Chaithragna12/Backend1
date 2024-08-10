const express=require('express');
const app=express();
const port=3000;

app.get('/greet',(req,res)=>{
    const data =req.query.name ||'world';
    res.send(`hello, ${data}`);
})

app.listen(port,()=>{
    console.log(`server is running ${port}`);
})