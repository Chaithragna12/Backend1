const express=require('express');
const app=express();
const port=3000;

app.get('/user/:id',(req,res)=>{
    const name=req.params.id;
    res.send(`user ID: ${name}`);
})

app.listen(port,()=>{
    console.log(`server is running with ${port} port`);
})