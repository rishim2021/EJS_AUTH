const express = require('express');


const router  = express.Router();

router.get('/',async(req,res)=>{
    res.status(200).render('login',{register:1,login:0})
})

router.post('/',async(req,res)=>{
    
    res.status(200).render('login',{register:0,login:1,sucessMsg:1})
})


module.exports = router;