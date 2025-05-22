import express from "express"
import http from "http"

// const io = require("socket.io")
import cors from "cors"
import {Server} from "socket.io"
import { verify } from "./utils/auth.js"


let app = express()
app.use(cors({
        origin: "http://localhost:3000",
        methods: ["GET, POST"],
        credentials: true
}))
let server = http.createServer(app)

app.post(verify,"/LogIn",()=>{
     
})

let io = new Server(server,{
     cors:{
        origin: "http://localhost:3000",
        methods: ["GET, POST"],
        credentials: true
    }
})

// console.log(io)



    io.on("connection", (socket)=>{
        console.log("somebody is online", socket.id)

     
    
        socket.on("disconnect", (reason,details)=>{
            console.log( "somebody got disconnected", socket.id)
     
        })

        socket.on("room",(data)=>{
            console.log("room", data)
            socket.join(data)
        })

        socket.on("sent",(data)=>{
            console.log(data)
            io.to(data.room).emit("got-message", data)
       
        })
       
    })
  
   


server.listen("3001",()=>{
    console.log("listening on port 3001")
})


