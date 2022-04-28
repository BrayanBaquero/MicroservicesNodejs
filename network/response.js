const httpStatus = require("http-status-codes").StatusCodes;

exports.success=function (req,res,message = '',status=httpStatus.OK) {
    res.status(status).send({
        error: false,
        status: status,
        body: message
    });  
}

exports.error=function (req,res,message ='Internal server error',status=httpStatus.INTERNAL_SERVER_ERROr) {
    res.status(status).send({
        error: true,
        status: status,
        body: message
    });  
    
}