import logo from './logo.svg';
import './App.css';
import { io } from 'socket.io-client';
import Room from './room/Room';
import { useEffect, useState } from 'react';
import Chat from "./chat/Chat.js"
// import { json } from 'sequelize';

let socket = io("http://localhost:3001", {
  withCredentials: true
  // auth:{
  //   token: localStorage.getItem("token")
  // }
})
// socket.on()
console.log(socket)


function App() {
  const [room,setRoom] = useState("")
  const [user,setUser] = useState("")
  const [password, setPassword] = useState("")
  const [show,setShow] = useState(false)

   
  function joinChat(userInput, roomInput, pssInput){
    let logInData = {
            username: userInput,
            password: pssInput
    }

    fetch("http://localhost:3001/logIn",{
      header:"POST",
      body: JSON.stringify(logInData)
    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data)
    })

    if(userInput !== "" && roomInput !== ""){
       socket.emit("room",roomInput )
       setRoom(roomInput)
       setUser(userInput)
       setShow(true)
    }
}

  // useEffect(()=>{
  //   socket.on("got-message",(data)=>{
  //      console.log(data)
  //   })
  // },[socket])
 
  return (
    <div className="App">
        {show ? <Chat socket={socket} user={user} room={room}/> : <Room socket={socket} joinChat={joinChat}/>}
   
    </div>
  );
  
}

export default App;
