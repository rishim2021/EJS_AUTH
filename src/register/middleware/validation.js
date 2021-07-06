const Joi = require('joi');

const validator = require("email-validator");

const db = require('../../../config/db');


const userModel = db.users;




function validateFields(bodyData){
    const schema = Joi.object({
        UserName : Joi.string().required(),
        UserPassword : Joi.string().min(5).required(),
        UserEmail : Joi.string().email({ tlds: { allow: false } }).required(),
        UserPhone : Joi.number().min(10).max(10).required()

    })
    return schema.validate(bodyData,{allowUnknown:true})
}

function validateEmail(bodyData){
  
}


exports.validate = validateFields;
exports.validateEml = validateEmail;