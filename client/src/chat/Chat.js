import React, { useEffect, useState } from 'react'
import './chat.css';

export default function Chat({room, user, socket}) {
    const [text, setText] = useState("")
    const [messageData, setMessagesData] = useState([])

 async function handleClick (){
          let data = {
              room: room,
              user: user,
              text: text
          }
          // setMessages(data)

          if(text !== ""){
            await socket.emit("sent",data)
          }

          else{
            alert("empty message")
          }
        
       
        
    }

    useEffect(()=>{
        socket.on("got-message", (data)=>{
          console.log(data)
            setMessagesData((prev)=> console.log(prev))
        })
    },[])

   
    
  return (
    <div id="chat-container">
         <h1>TEXT HERE</h1>
        <div id="body">
           {messageData.map((t)=>{
              <p>{t.text}</p>
           })}
        </div>
         <div id="footer">
            <input type="text" onChange={(event)=>{setText(event.target.value)}}/>
            <button id="button-send" onClick={handleClick}>Send</button>
         </div>
    </div>
  )
}
