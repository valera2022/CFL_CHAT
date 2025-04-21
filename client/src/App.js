import logo from './logo.svg';
import './App.css';
import { io } from 'socket.io-client';
import Room from './Room';

let socket = io("http://localhost:3001", {
  withCredentials: true})
// socket.on()
console.log(socket)

function App() {
 
  return (
    <div className="App">
       <Room socket={socket}/>
    </div>
  );
}

export default App;
