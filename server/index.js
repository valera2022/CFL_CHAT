const express = require("express")
const http = require("http")
// const io = require("socket.io")
const cors = require("cors")
const {Server} = require("socket.io")

let app = express()
app.use(cors({
        origin: "http://localhost:3000",
        methods: ["GET, POST"],
        credentials: true
}))
let server = http.createServer(app)

let io = new Server(server,{
     cors:{
        origin: "http://localhost:3000",
        methods: ["GET, POST"],
        credentials: true
    }
})

console.log(io)



    io.on("connection",(socket)=>{
        console.log("somebody is online", socket.id)

     
    
        socket.on("disconnect", ()=>{
            console.log( "somebody got disconnected", socket.id)
        })

        socket.on("room",(data)=>{
            console.log(data)
        })
       
    })



server.listen("3001",()=>{
    console.log("listening on port 3001")
})


