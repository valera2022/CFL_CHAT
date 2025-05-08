import React, { useEffect, useState } from 'react'
import './chat.css';

export default function Chat({room, user, socket}) {
    const [text, setText] = useState("")
    const [messageData, setMessagesData] = useState([])

 async function handleClick (){
           console.log(room,user)
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
            setMessagesData((prev)=> [...prev, data])
        })
         return ()=>{
                socket.off("got-message")
         }
      
    },[socket])

   
    
  return (
    <div className="chat-container">
         <h2 className='chat-title'>Welcome {user}!</h2>
        <div className="body">
           {messageData.map((t, index)=>{
              return <div className='chat-bobble'>
                <p className='chat-text' key={index}>{t.text}</p>
                <p className='user-display'>{t.user}</p>
                </div>
           })}
        </div>
         <div id="footer">
            <input className="text-box" type="text" onChange={(event)=>{setText(event.target.value)}}/>
            <button className="button-send" onClick={handleClick}>Send</button>
         </div>
    </div>
  )
}
