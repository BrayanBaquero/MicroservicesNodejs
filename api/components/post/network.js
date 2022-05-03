const express=require('express');

const secure=require('./secure');
const response=require('../../../network/response');
const Controller=require('./index');


const router=express.Router();
const httpStatus = require("http-status-codes").StatusCodes;

router.get('/',list);
router.get('/:id',get);
router.post('/',secure('update'),upsert);
router.put('/:id',secure('update'),upsert);
router.delete('/:id',remove);

function list(req,res,next) {
    Controller.list()
    .then(data=>{
        response.success(req,res,data,200);
    })
    .catch(next);
}

function get(req,res,next) {
    Controller.get(req.params.id)
        .then((data)=>{
            response.success(req,res,data,httpStatus.OK);
        }).catch(next);
}

function upsert(req,res,next){
    Controller.upsert(req)
        .then((data)=>{
            response.success(req,res,data,httpStatus.CREATED);
        }).catch(next);
};

function remove(req,res,next){
    Controller.remove(req.params.id)
        .then((data)=>{
            response.success(req,res,data,httpStatus.DELETED);
        }).catch(next);
};

module.exports=router;