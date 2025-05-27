import {Sequelize, DataTypes} from "sequelize"
import bcrypt from "bcrypt"
// const sqlite = require("sqlite3")
import  pg from "pg"

// const sequelize = new Sequelize('postgres://user:postgres:/db')
const sequelize = new Sequelize('postgres://rafelo:mypassword123@localhost:5432/mydb');
try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

const User = sequelize.define("User",{
     username: DataTypes.STRING,
     password: DataTypes.STRING
})

const jane = User.build({ username: 'Jane', password:123 });
console.log(jane instanceof User); // true
console.log(jane.username); // "Jane"

console.log("defining users model:" ,User)

const message = sequelize.define("Message",{
      text: DataTypes.STRING,
      time: DataTypes.DATE,
    

})


export const createUser = async ({username, password})=>{
     let hashedPassword = await bcrypt.hash(password, "10")
     User.create({
          username: username,
          password: hashedPassword
     })
     
}

User.hasMany(message)
message.belongsTo(User)

await sequelize.sync({force: true})

const John = User.create({
     username: 'john12',
     password: "123"
})
console.log(John)

const userJohn = await User.findOne({ where: { username: 'john12' } })
console.log(userJohn)
// Find all users
// const users = await User.findAll();
// console.log(users.every(user => user instanceof User)); // true
// console.log('All users:', JSON.stringify(users, null, 2));





