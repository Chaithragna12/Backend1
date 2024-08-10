const express=require('express');
const app=express();
const port=3000;

app.put('/update',(req,res)=>{
    res.send("update");
})

app.listen(port,()=>{
    console.log(`server is running with ${port} port`);
})