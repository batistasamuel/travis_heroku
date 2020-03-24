const Sequelize = require('sequelize')
const dbConfig = require('../config/index')

const Users = require('../models/users')
const Logs = require('../models/logs')
const Applications = require('../models/applications')
const passwordReset = require('../models/passwordReset')

let connection

if (process.env.JAWSDB_URL){
    connection = new Sequelize(process.env.JAWSDB_URL)
} else {
    connection = new Sequelize(dbConfig)
}

Users.init(connection)
Logs.init(connection)
Applications.init(connection)
passwordReset.init(connection)

Users.associate(connection.models)
Applications.associate(connection.models)
Logs.associate(connection.models)

module.exports = connection

