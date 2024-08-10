const express=require('express');
const app=express();
const port=3000;

app.use((req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
})

app.get('/',(req,res)=>{
    res.send('hello, morning');
})

app.post('/data',(req,res)=>{
    res.send('data received');
})

app.put('/update',(req,res)=>{
    res.send('update');
})

app.delete('/delete/:id',(req,res)=>{
    const data=req.params.id;
    res.send(`deleted item with ID: ${data}`);
})

app.listen(port,()=>{
    console.log(`server is running with ${port}`);
})