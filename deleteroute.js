const express=require('express');
const app=express();
const port=3000;

app.delete('/delete/:id',(req,res)=>{
    const name=req.params.id;
    res.send(`deleted item with id: ${name}`);
})

app.listen(port,()=>{
    console.log(`server is running with ${port}`);
})