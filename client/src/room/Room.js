import React, { use, useState } from 'react'
// import Chat from '../chat/Chat'
import "./room.css"

export default function Room({socket, joinChat}) {
    console.log(socket)
    const [user, setUser] = useState("")
    const [room, setRoom] = useState("")
    const [password, setPassword] = useState("")
   
    
    function sendChat(){
        console.log(user)
        console.log(room)
        // const roomData = {
        //     user: user,
        //     room: user,
        // }
        joinChat(user, room, password)
        // if(user !== "" && room !== ""){
        //    socket.emit("room",room )
        //    setShow(true)
        // }
    }

  return (
    <div className='room-container' >
        <input className="user" type="text" placeholder='User' onChange={(event)=> setUser(event.target.value)}/>
        <input className="room" type='text' placeholder='room' onChange={(event)=> setRoom(event.target.value)}/>
        <input className="pss" type='password' placeholder='password' onChange={(event)=> setPassword(event.target.value)}/>
        <button onClick={sendChat}>Open Chat</button>
        {/* {show? <Chat socket={socket} room={room} user={user}/> : null} */}
    </div>
  )


}
