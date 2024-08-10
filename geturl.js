const express=require('express');
const app=express();
const port=3000;

app.get('/greet/:name',(req,res)=>{
    const pap=req.params.name;
    res.send(`hello, ${pap}`);
})

app.listen(port,()=>{
    console.log(`server is running ${port}`);
})