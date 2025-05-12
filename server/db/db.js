import {Sequelize, DataTypes} from "sequelize"
// const sqlite = require("sqlite3")
import  pg from "pg"

// const sequelize = new Sequelize('postgres://user:postgres:/db')
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define("user",{
     username: DataTypes.STRING,
     password: DataTypes.STRING
})

const message = sequelize.define("message",{
      text: DataTypes.STRING,
      time: DataTypes.DATE,
    

})

const John = User.create({
     username: 'john12',
     password: "123"
})

const users = User.findAll()

console.log(users)

User.hasMany(message)
message.belongsTo(User)