const express=require('express');
const {body,validationResult}=require('express-validator');
const app=express();
app.post('/register',[
    body('name')
    .trim()
    .isLength({min:2}).withMessage('name must have atleast 2 characters along')
    .escape(),

    body('email')
    .isEmail().withMessage('please provide a valid email address')
    .normalizeEmail(),

    body('password')
    .isLength({min:6}).withMessage('password must have atleast 6 characters along')
    .matches(/\d/).withMessage('password must contain a number'),
],(req,res)=>{
    const errors= validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    res.status(200).send('user registered successfully');
})

app.listen(3000,()=>{
    console.log(`server is running with 3000`);
})
