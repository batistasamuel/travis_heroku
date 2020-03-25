// require('dotenv').config({path: 'variables.env'})

const aws = require('aws-sdk');

let Database
// const aws = new aws.S3({
//     dialect: process.env.DB_DIALECT,
//     host: process.env.DB_HOST,
//     username: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: Database,
//     port: process.env.DB_PORT,
//     define:{
//         timestamps:true,
//     },
//     dialectOptions:{
//         timezone:'Etc/GMT0',
//     },
// })

if (`${process.env.NODE_ENV}` !== 'prod'){
    Database = `sentinel_log_${process.env.NODE_ENV}`
} else {
    Database = process.env.DB_DATABASE
}

module.exports = new aws.S3({
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: Database,
    port: process.env.DB_PORT,
    define:{
        timestamps:true,
    },
    dialectOptions:{
        timezone:'Etc/GMT0',
    },
})
