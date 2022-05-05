const {nanoid}=require('nanoid');
const TABLA='post'



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

    async function upsert(data) {
        console.log(data.params.id);
        const post={
            id :data.params.id?data.params.id:nanoid(),
            text:data.body.text,
            user: data.user.id,
        }

        return store.upsert(TABLA,post);
    }

    function remove(id) {
        return store.remove(TABLA,id);
    }

    return {
        list,
        get,
        upsert,
        remove
    }
}