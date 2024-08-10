const express=require('express');
const app=express();
const compression=require('compression');
const port=3000||process.env.PORT;

app.use(compression());

app.get('/',(req,res)=>{
    res.send('This is a response that will be compressed if your client supports it.');
})

app.get('/data',(req,res)=>{
    const largedata={
        message:'This is a large payload that will benefit from compression.',
        data:new Array(10).fill('some repeated data...').join()
    };
    res.json(largedata);
})

app.listen(port,()=>{
    console.log(`server is running with ${port}`);
})