const {nanoid}=require('nanoid');
const auth = require('../auth');
//import { nanoid } from 'nanoid'
const TABLA='user'



module.exports=function(injectedStore, injectedCache){
    let cache=injectedCache;
    let store=injectedStore;
    if(!store){
        store=require('../../../store/dummy');
    }
    if(!cache){
        cache=require('../../../store/dummy');
    }

    async function list() {
        let users=await cache.list(TABLA);
        if(!users){
            console.log('No estaba en cache. Buscando en DB');
            users=await store.list(TABLA);
            cache.upsert(TABLA,users);
        }else{
            console.log('Obteniendo datos de cache');
        }
        return users;
    }

    async function get(id) {
        let user=await cache.get(TABLA,id);
        if(!user){
            console.log('No estaba en cache. Buscando en DB');
            user=await store.get(TABLA,id);
            cache.upsert(TABLA,user);
        }else{
            console.log('Obteniendo datos de cache');
        }
        return user;
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

