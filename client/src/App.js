import logo from './logo.svg';
import './App.css';
import { io } from 'socket.io-client';
import Room from './room/Room';
import { useEffect, useState } from 'react';

let socket = io("http://localhost:3001", {
  withCredentials: true})
// socket.on()
console.log(socket)


function App() {
  const [room,setRoom] = useState("")
  const [user,setUser] = useState("")

   
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

  // useEffect(()=>{
  //   socket.on("got-message",(data)=>{
  //      console.log(data)
  //   })
  // },[socket])
 
  return (
    <div className="App">
       <Room socket={socket} joinChat={joinChat}/>
    </div>
  );
  
}

export default App;
