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

// console.log(io)



    io.on("connection",(socket)=>{
        console.log("somebody is online", socket.id)

     
    
        socket.on("disconnect", (reason,details)=>{
            console.log( "somebody got disconnected", socket.id)
             // the reason of the disconnection, for example "transport error"
                  console.log(reason);

            // the low-level reason of the disconnection, for example "xhr post error"
                 console.log(details);

         // some additional description, for example the status code of the HTTP response
                    console.log(details.description);

         // some additional context, for example the XMLHttpRequest object
                console.log(details.context);
        })

        socket.on("room",(data)=>{
            console.log(data)
            socket.join(data)
        })
       
    })



server.listen("3001",()=>{
    console.log("listening on port 3001")
})


