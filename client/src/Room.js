import React, { use, useState } from 'react'
import Chat from './chat/Chat'

export default function Room({socket}) {
    console.log(socket)
    const [user, setUser] = useState("")
    const [room, setRoom] = useState("")
    const [show,setShow] = useState(false)
    
    function joinChat(){
        console.log(user)
        console.log(room)
        const roomData = {
            user: user,
            room: user,
        }
        if(user !== "" && room !== ""){
           socket.emit("room",room )
           setShow(true)
        }
    }

  return (
    <div>
        <input type="text" placeholder='User' onChange={(event)=> setUser(event.target.value)}/>
        <input type='text' placeholder='room' onChange={(event)=> setRoom(event.target.value)}/>
        <button onClick={joinChat}>Open Chat</button>
        {show? <Chat socket={socket} room={room} user={user}/> : null}
    </div>
  )
}
