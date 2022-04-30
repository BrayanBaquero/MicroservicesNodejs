const bcrypt=require('bcrypt');
const auth=require('../../../auth');
const error=require('../../../utils/error');
const TABLA='auth';
module.exports=function(injectedStore){
    let store=injectedStore;
    if(!store){
        store=require('../../../store/dummy');
    }

    async function login(username,password) {
        const data=await store.query(TABLA,{username:username});

        return bcrypt.compare(password,data.password)
              .then(sonIguales=>{
                if(sonIguales==true){
                    //Generara token
                    delete data.password;
                    return auth.sign(data);
                }else{
                    throw error('Informacion invalida',401);
                }
              });

       
    }

    async function upsert(data) {
        const authData={
            id: data.id,
        }

        authData.username=data.username?data.username:null;
        authData.password=data.password?await bcrypt.hash(data.password,5):null;

        return store.upsert(TABLA,authData)
    }

    return {
        login,
        upsert,
    }
}