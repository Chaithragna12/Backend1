const express=require('express');
const app=express();
const port=3000;

app.use(express.json())

app.post('/',(req,res)=>{
    const data=req.body;
    res.json({recieved:data});
})
app.listen(port,()=>{
    console.log(`server is running with port number ${port}`);
})