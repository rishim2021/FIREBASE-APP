
const express = require('express');

const router  = express.Router();

const db = require('../../../config/db');

// const userModel = db.users;

const { validate } = require('../middleware/validation');
 
const bcrypt = require('bcryptjs');

const auth = require('../middleware/authGuard');

router.get('/',async(req,res)=>{
    let arr = []
    let data = await db.collection('customers').get();
    data.forEach((data)=>{
        arr.push(data.data())
    })
    console.log(arr)
    // console.log(data.docs())
    res.status(200).render('login',{ layout:false,name:'Akashdeep',login:1,register:0 ,data : arr});
})

router.post('/add',async(req,res)=>{
    let bodyData = req.body;
    const { error } = validate(bodyData)
    if(error) return res.status(400).send({Error:error.details[0].message})
    let arr = []
    let data = await db.collection('customers').get();
    data.forEach((data)=>{
        arr.push(data.data())
    })
    let id = arr.length + 1; 
    // console.log(id)
    let addData = db.collection('customers').doc(bodyData.UserName)
    addData.create({
        id : id,
        name :  bodyData.UserName,
        email : bodyData.UserEmail,
        phone : bodyData.UserPhone
    
    })
    res.status(200).redirect('/customer')

})


// router.get('/home',auth,async(req,res)=>{
//     res.status(200).render('home')
// })


router.get('/logout',async(req,res)=>{
    req.session.destroy((err)=>{
        if(err) throw err;
        res.redirect('/login')
    })
})












module.exports = router;