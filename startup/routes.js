const loginService = require("../routes/login/login");

const express = require('express');

const cookieAuth = require('../middleware/cookie/auth');

const path = require('path');

const cookierParser = require('cookie-parser')

const registerService = require('../routes/register/register');

module.exports = (app) =>{
    app.use(cookierParser('1234'));
    app.use(cookieAuth)
    app.use(express.json())
    app.use(express.static('public'))
    app.set('view engine', 'ejs');
    app.set('layout', 'layouts/layout');
    app.use('/login',loginService)
    app.use('/register',registerService)
    app.get('/',async(req,res)=>{
        res.status(200).send('Welcome home !');
    })
  
}