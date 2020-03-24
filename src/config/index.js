require('dotenv').config({path: 'variables.env'})

let Database

if (NODE_ENV=='production'){
    Database = 'ft48eyekd474dndk'
} else {
    Database = `sentinel_log_${process.env.NODE_ENV}`
}

module.exports = {
    dialect:process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: Database,
    port:process.env.DB_PORT,
    define:{
        timestamps:true,
    },
    dialectOptions:{
        timezone:'Etc/GMT0',
    },
}
