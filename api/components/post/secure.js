const auth=require('../../../auth')

module.exports=function checkAuth(action){

    function midelware(req,res,next) {
        switch(action){
            case'update':
                auth.check.logged(req);
                next();
                break;

            default:
                next();
        }
    }

    return midelware;
    
}