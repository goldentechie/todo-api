const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Todo = sequelize.define("Todos", {
  id: {
    type: DataTypes.STRING,
    unique: true,
    primaryKey: true
  },
  date: {
    type: DataTypes.DATE
  },
  content: {
    type: DataTypes.STRING
  },
  isDone: {
    type: DataTypes.BOOLEAN
  },
  isScheduled: {
    type: DataTypes.BOOLEAN
  },
  poolId: {
    type: DataTypes.STRING
  },
  poolType: {
    type: DataTypes.STRING
  }
});

module.exports = Todo;
