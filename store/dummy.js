

const db={
    'user':[
        {id:'1',name:'Juan'}, 
    ],
};

async function list(tabla) {
    return db[tabla] || [];
}

async function get(tabla,id) {
    let col=await list(tabla);
    return col.filter(item => item.id === id)[0] || null;
}

async function upsert(tabla,data) {
    if(!db[tabla]){
        db[tabla]=[];
    }
    db[tabla].push(data);
    console.log(db);
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

async function query(tabla,q) {
    let col=await list(tabla);
    let keys=Object.keys(q);
    let key=keys[0];
    return col.filter(item => item[key] === q[key])[0] || null;
}

module.exports={
    list,
    get,
    upsert,
    remove,
    query,
}