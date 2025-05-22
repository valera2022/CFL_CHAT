import {Sequelize, DataTypes} from "sequelize"
import {bcrypt} from "bcrypt"
// const sqlite = require("sqlite3")
import  pg from "pg"

// const sequelize = new Sequelize('postgres://user:postgres:/db')
const sequelize = new Sequelize('postgres://rafelo:mypassword123@localhost:5432/mydb');

const User = sequelize.define("user",{
     username: DataTypes.STRING,
     password: DataTypes.STRING
})

const message = sequelize.define("message",{
      text: DataTypes.STRING,
      time: DataTypes.DATE,
    

})


export const createUser = ({username, password})=>{
     let hashedPassword = bcrypt.hash(password, 10)
     User.create({
          username: username,
          password: hashedPassword
     })
     
}

User.hasMany(message)
message.belongsTo(User)

// const John = User.create({
//      username: 'john12',
//      password: "123"
// })

const users = User.findAll()

console.log(users)



