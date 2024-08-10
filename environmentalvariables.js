const express=require('express');
const app=express();
const port=process.env.PORT || 3000;

app.get('/data',(req,res)=>{
    res.send('hello beautifull people');
})

app.listen(port,()=>{
    console.log(`server is running with ${port}`);
})