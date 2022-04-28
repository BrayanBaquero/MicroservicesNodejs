

const db={
    'user':[
        {id:'1',name:'Juan'}, 
    ],
};

async function list(tabla) {
    return db[tabla];
}

async function get(tabla,id) {
    let col=await list(tabla);
    return col.filter(item => item.id === id)[0] || null;
}

async function upsert(tabla,data) {
    db[tabla].push(data);
}

async function remove(tabla,id) {
    const index=await get(tabla,id);
    
    if(index != null){
        console.log(index.id);
        db[tabla].splice(index.id-1,1);
        return true
    }
    return false;
}

module.exports={
    list,
    get,
    upsert,
    remove
}