const express=require('express');
const app=express();
const port=3000;
app.use(express.json());

app.post('/echo',(req,res)=>{
    res.send("hello");
    const data=req.body;
    console.log(data);
})
app.listen(port,()=>{
    console.log(`the server is running the port ${port}`);
})