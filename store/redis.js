//REDIS
const redis=require('redis');

const config=require('../config');

const client=redis.createClient({
    host: config.redis.host,
    port: config.redis.port,
    password: config.redis.password
});

(async () => {
    await client.connect();
    console.log('Conectado a REDIS');
  })();

async function list(table) {
    const value = await client.get(table);
    return JSON.parse(value);
    
}

async function get(table,id) {
    console.log(`${table}_${id}`);
    const value = await client.get(table+'_'+id);
    return JSON.parse(value);
}

async function upsert(table,data) {
    let key=table;
    if(data && data.id){
        key=key + '_' + data.id;
    }

    await client.setEx(key,10,JSON.stringify(data));
    return true;
}

module.exports={
    list,
    get,
    upsert,
};