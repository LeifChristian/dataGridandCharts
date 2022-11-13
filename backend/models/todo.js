const Sequelize = require('sequelize')
const sequelize = require('../utils/database')

const todo = sequelize.define('VisualData', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER
  },
  done: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },

  stats: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
revenue: {
  type: Sequelize.INTEGER,
  allowNull: true
},

sales: {
  type: Sequelize.INTEGER,
  allowNull: true
},
expenses: {
  type: Sequelize.INTEGER,
  allowNull: true
}

})

module.exports = todo