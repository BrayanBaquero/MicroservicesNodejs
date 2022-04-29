const TABLA='auth';
module.exports=function(injectedStore){
    let store=injectedStore;
    if(!store){
        store=require('../../../store/dummy');
    }

    function upsert(data) {
        const authData={
            id: data.id,
        }

        authData.username=data.username?data.username:null;
        authData.password=data.password?data.password:null;

        return store.upsert(TABLA,authData)
    }

    return {
        upsert,
    }
}