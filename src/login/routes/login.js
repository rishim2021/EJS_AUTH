
const express = require('express');

const router  = express.Router();

router.get('/',async(req,res)=>{

    res.status(200).render('login',{ layout:false,name:'Akashdeep',login:1,register:0 });
})

router.post('/',async(req,res)=>{
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