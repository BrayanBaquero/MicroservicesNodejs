const auth=require('../../../auth');
const TABLA='auth';
module.exports=function(injectedStore){
    let store=injectedStore;
    if(!store){
        store=require('../../../store/dummy');
    }

    async function login(username,password) {
        const data=await store.query(TABLA,{username:username});
        if(data.password===password){
            //Generara token
            return auth.sign(data);
        }else{
            throw new Error('Informacion invalida');
        }
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
        login,
        upsert,
    }
}