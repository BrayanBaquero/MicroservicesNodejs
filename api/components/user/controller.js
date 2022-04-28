const nanoid=require('nanoid');
//import { nanoid } from 'nanoid'
const TABLA='user'



module.exports=function(injectedStore){
    let store=injectedStore;
    if(!store){
        store=require('../../../store/dummy');
    }

    function list() {
        return store.list(TABLA);
    }

    function get(id) {
        return store.get(TABLA,id);
    }

    function upsert(data) {
        const id=data.id?data.id:nanoid.nanoid();
        const user={
            name:data.name,
            id 
        }
        return store.upsert(TABLA,user);
    }

    function remove(id) {
        return store.remove(TABLA,id);
    }
    return{
        list,
        get,
        upsert,
        remove,
    }
}

