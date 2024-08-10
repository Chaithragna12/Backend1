const express=require('express');
const app=express();
const rateLimit=require('express-rate-limit');
const port=3000||process.env.PORT;

const limiter=rateLimit({
    windowMs:15 *60*1000,
    max:100,
    message:'to many requests from this IP,please try again after 15 minutes',
})

app.use(limiter);

app.get('/',(req,res)=>{
    res.send('hello,world');
})

app.get('/route',(req,res)=>{
    res.send('this is another route');
})

app.listen(port,()=>{
    console.log(`server is running with ${port}`);
})