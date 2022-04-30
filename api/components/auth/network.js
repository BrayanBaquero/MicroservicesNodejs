const express=require('express');

const response=require('../../../network/response');
const error=require('../../../utils/error');
const Controller=require('./index')

const router=express.Router();
const httpStatus = require("http-status-codes").StatusCodes;

router.post('/login',login);

function login(req,res,next) {
    Controller.login(req.body.username,req.body.password)
        .then(token=>{
            response.success(req,res,token,httpStatus.OK);
        })
        .catch(e=>{
            throw error('Informacion invalida',httpStatus.NOT_FOUND);
          //  response.error(req,res,'Informacion invalida',httpStatus.NOT_FOUND);
        });
}


module.exports=router;