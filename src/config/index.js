require('dotenv').config({path: 'variables.env'})

module.exports = {
    dialect:process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    //database: `sentinel_log_${process.env.NODE_ENV}`,
    database: 'sxl4osqu2x0gv2x8',
    port:process.env.DB_PORT,
    define:{
        timestamps:true,
    },
    dialectOptions:{
        timezone:'Etc/GMT0',
    },
}
