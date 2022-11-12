const Sequelize = require('sequelize')

const DB_NAME = 'perntest'
const USER_NAME = 'postgres'
const PASSWORD = 'user'

const sequelize = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
  host: 'localhost',
  dialect: 'postgres'
})

module.exports = sequelize