module.exports={
    api:{
        port: process.env.API_PORT || 3000,
    },
    post:{
        port: process.env.POST_PORT || 3002,
    },
    jwt:{
        secret:process.env.JWT_SECRET || 'notasecret!',
    },
    mysql:{
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'user',
        password: process.env.MYSQL_PASS || 'password',
        database: process.env.MYSQL_DB|| 'db',
    },
    mysqlService:{
        host:process.env.MYSQL_SVR_host ||'localhost',
        port :process.env.MYSQL_SVR_PORT|| 3001,
    },
    cacheService:{
        host:process.env.MYSQL_SVR_host ||'localhost',
        port :process.env.MYSQL_SVR_PORT|| 3003,
    },redis:{
        host:process.env.REDIS_HOST || 'localhost',
        port:process.env.REDIS_PORT || 6379,
        password: process.env.REDIS_PASS ||'eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81'
    }
    
}