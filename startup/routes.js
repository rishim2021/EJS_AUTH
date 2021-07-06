const loginService = require("../src/login/routes/login");

const express = require('express');

// const cookieAuth = require('../middleware/cookie/auth');

const path = require('path');

const db = require('../config/db');

const cookierParser = require('cookie-parser')

const registerService = require('../src/register/routes/register');



module.exports = (app) =>{
    app.use(cookierParser('1234'));
    // app.use(cookieAuth)
    app.use(express.json())
    app.use(express.static('assets'))
    db.sequelize.sync()
    app.set('view engine', 'ejs');
    app.use(express.urlencoded({extended:false}))
    app.set('layout', 'layouts/layout');
    app.use('/login',loginService)
    app.use('/register',registerService)
    app.get('/',async(req,res)=>{
        res.status(200).send('Welcome home !');
    })
  
}