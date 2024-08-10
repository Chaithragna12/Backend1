const express=require('express');
const path=require('path');
const cors=require('cors');
const app=express();
const port=process.env.PORT || 3000;


const corsOptions={
    origin:'*',
    method:'GET,POST',
    allowedHeaders:'content-type,authorization'
}

app.use(cors(corsOptions));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
})

app.listen(port,()=>{
    console.log(`server is running with ${port}`);
})

