module.exports={
    api:{
        port: process.env.API_PORT || 3000,
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
        port :process.env.MYSQL_SVR_POR|| 3001,
    }
}