const express=require('express');

const secure=require('./secure');
const response=require('../../../network/response');
const Controller=require('./index');


const router=express.Router();
const httpStatus = require("http-status-codes").StatusCodes;

router.get('/',list);
router.get('/:id',get);
router.post('/',upsert);
router.put('/:id',secure('update'),upsert);
router.delete('/:id',remove);

function list(req,res){
    Controller.list()
        .then((lista)=>{
            response.success(req,res,lista,httpStatus.OK);
        }).catch(err=>{
            response.error(req,res,err.message,500);
        });
    
};

function get(req,res){
    Controller.get(req.params.id)
        .then((user)=>{
            response.success(req,res,user,httpStatus.OK);
        }).catch(err=>{
            response.error(req,res,err.message,500);
        });
};

function upsert(req,res){
    Controller.upsert(req.body)
        .then((user)=>{
            response.success(req,res,user,httpStatus.CREATED);
        }).catch(err=>{
            response.error(req,res,err.message,500);
        });
};

function remove(req,res){
    Controller.remove(req.params.id)
        .then((user)=>{
            response.success(req,res,user,httpStatus.DELETED);
        }).catch(err=>{
            response.error(req,res,err.message,500);
        });
};

module.exports=router;