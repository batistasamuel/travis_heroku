const Sequelize = require('sequelize')
const dbConfig = require('../config/index')

const Users = require('../models/users')
const Logs = require('../models/logs')
const Applications = require('../models/applications')
const passwordReset = require('../models/passwordReset')

let connection
const JAWSDB_URL = 'mysql://qca1h6amymitf6od:zbq2p57134zshbmo@axxb6a0z2kydkco3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/ft48eyekd474dndk'
//if (process.env.JAWSDB_URL){
    connection = new Sequelize(JAWSDB_URL)
//} else {
//    connection = new Sequelize(dbConfig)
//}

Users.init(connection)
Logs.init(connection)
Applications.init(connection)
passwordReset.init(connection)

Users.associate(connection.models)
Applications.associate(connection.models)
Logs.associate(connection.models)

module.exports = connection

