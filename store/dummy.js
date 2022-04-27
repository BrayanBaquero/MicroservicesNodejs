

const db={
    'user':[
        {id:1,name:'Juan'}, 
    ],
};

function list(tabla) {
    return db[tabla];
}

function get(tabla,id) {
    let col=list(tabla);
    return col.filter(item => item.id === id)[0] || null;
}

function upsert(tabla,id) {
    db[collection].push(data);
}

function remove(tabla,id) {
    
}

module.exports={
    list,
    get,
    upsert,
    remove
}