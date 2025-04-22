import React, { useEffect, useState } from 'react'
import './chat.css';

export default function Chat({room, user, socket}) {
    const [text, setText] = useState("")

 async function handleClick (){
          let data = {
              room: room,
              user: user,
              text: text
          }
          if(text !== ""){
            await socket.emit("sent",data)
          }

          else{
            alert("empty message")
          }
        
       
        
    }

    useEffect(()=>{
      socket.on("got-message",(data)=>{
         console.log(data)
      })
    },[socket])
    
  return (
    <div id="chat-container">
         <h1>TEXT HERE</h1>
        <div id="body"></div>
         <div id="footer">
            <input type="text" onChange={(event)=>{setText(event.target.value)}}/>
            <button id="button-send" onClick={handleClick}>Send</button>
         </div>
    </div>
  )
}
