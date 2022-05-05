const {nanoid}=require('nanoid');
const auth = require('../auth');
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

    async function upsert(data) {
        const user={
            id :data.params.id?data.params.id:nanoid(),
            name:data.body.name,
            username: data.body.username,
        }

        if(data.body.password || data.body.username){
            await auth.upsert({
                id: user.id,
                username: user.username,
                password: data.body.password,
            })
        }
        return store.upsert(TABLA,user);
    }

    function remove(id) {
        return store.remove(TABLA,id);
    }

    function follow(from,to) {
        return store.upsert(TABLA+'_follow',{
            user_from:from,
            user_to:to,
        })
    }

    async function following(user) {
        const join = {}
        join[TABLA] = 'user_to'; // { user: 'user_to' }
        const query = { user_from: user };
		
		return await store.query(TABLA + '_follow', query, join);
	}
    return{
        list,
        get,
        upsert,
        remove,
        follow,
        following,
    }
}

