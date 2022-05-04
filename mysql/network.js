const express=require('express');

const response=require('../network/response');
const Store=require('../store/mysql');


const router=express.Router();
const httpStatus = require("http-status-codes").StatusCodes;


router.get('/:table',list);
router.get('/:table/:id',get);
router.post('/:table',insert);
router.put('/:table',upsert);

async function list(req,res,next) {
    const datos=await  Store.list(req.params.table);
    response.success(req,res,datos,200);
}

async function get(req,res,next) {
    const datos=await  Store.get(req.params.table,req.param.id);
    response.success(req,res,datos,200);
}

async function insert(req,res,next) {
    const datos=await  Store.insert(req.params.table,req.body);
    response.success(req,res,datos,200);
}

async function upsert(req,res,next) {
    const datos=await  Store.upsert(req.params.table,req.body);
    response.success(req,res,datos,200);
}


module.exports=router;