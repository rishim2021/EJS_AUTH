
const express = require('express');

const router  = express.Router();

const db = require('../../../config/db');

const userModel = db.users;




router.get('/',async(req,res)=>{
    // let userData = new userModel()
    // userData.name = "Rishi";
    // userData.role = "admin";
    // userData.active = "1"
    // userData.save()

    res.status(200).render('login',{ layout:false,name:'Akashdeep',login:1,register:0 });
})

router.post('/',async(req,res)=>{

    let bodyData = req.body;
    console.log(bodyData);

    res.status(200).send("sucessfully loggdIn")
})


// router.get('/logout',async(req,res)=>{
//     console.log("logout")
//     res.clearCookie('user','admin')
//     console.log(req.signedCookies);
//     // res.status(200).send(req.signedCookies)
//     res.redirect('/')
// })









module.exports = router;