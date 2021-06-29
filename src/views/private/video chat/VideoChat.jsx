import React, { useEffect, useState } from "react";
import io from 'socket.io-client';

let socket;
const CONNECTION_PORT = 'localhost:4000/';


export default function VideoChat() {


    const [loggedIn, setLoggedIn] = useState(false);
    const [room, setRoom] = useState('');
    const [userName, setUserName] = useState(''); 

    useEffect(() => {
        socket = io(CONNECTION_PORT)
    }, { transport : ['websocket', 'polling', 'flashsocket'] })


    const connectToRoom = () => {
        socket.emit('join_room', room);
    }
    

    return (
        <>
            <div className="chat-interface">
                {!loggedIn ? (
                    <div className="logIn">
                        <div className="inputs">
                            <input type="text" placeholder="Name" onChange={
                                (e) => {
                                    setUserName(e.target.value);
                                }
                            }>
                            </input>
                            <input type="text" placeholder="Room" onChange={
                                (e) => {
                                    setRoom(e.target.value);
                                }
                            }>
                            </input>
                            <button onClick={connectToRoom}>Enter Chat</button>
                        </div>
                    </div>
                
                ) : (
                    <h1>You are not logged in</h1>
                )
                
                }
            </div>

            
        </>
    )
}