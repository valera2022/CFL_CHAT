import React, { useState } from 'react'
import './chat.css';

export default function Chat() {
    const [text, setText] = useState("")
    
  return (
    <div id="chat-container">
         <h1>TEXT HERE</h1>
        <div id="body"></div>
         <div id="footer">
            <input type="text" onChange={(event)=>{setText(event.target.value)}}/>
         </div>
    </div>
  )
}
