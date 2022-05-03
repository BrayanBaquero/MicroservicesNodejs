const express=require('express');

const secure=require('./secure');
const response=require('../../../network/response');
const Controller=require('./index');


const router=express.Router();
const httpStatus = require("http-status-codes").StatusCodes;

router.get('/',list);
router.get('/follow/:id',secure('follow'),follow);
router.get('/:id/following', following);
router.get('/:id',get);
router.post('/',upsert);
router.put('/:id',secure('update'),upsert);
router.delete('/:id',remove);

function list(req,res,next){
    Controller.list()
        .then((lista)=>{
            response.success(req,res,lista,httpStatus.OK);
        }).catch(next);
    
};

function get(req,res,next){
    Controller.get(req.params.id)
        .then((user)=>{
            response.success(req,res,user,httpStatus.OK);
        }).catch(next);
};

function upsert(req,res,next){
    Controller.upsert(req)
        .then((user)=>{
            response.success(req,res,user,httpStatus.CREATED);
        }).catch(next);
};

function remove(req,res,next){
    Controller.remove(req.params.id)
        .then((user)=>{
            response.success(req,res,user,httpStatus.DELETED);
        }).catch(next);
};

function follow(req,res,next) {
    Controller.follow(req.user.id,req.params.id)
        .then(data=>{
            response.success(req,res,data,201);
        }).catch(next);
    }
function following(req, res, next) {
        return Controller.following(req.params.id)
            .then( (data) => {
                return response.success(req, res, data, 200);
            })
            .catch(next);
    }
module.exports=router;