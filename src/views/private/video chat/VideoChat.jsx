import React, { useEffect, useState } from "react";
import { Button, Form } from 'react-bootstrap';
import { useHistory } from "react-router";
import io from 'socket.io-client';
import axios from 'axios';
import {toast} from "react-toastify";

let socket;
const CONNECTION_PORT = 'localhost:4000/';


export default function VideoChat() {
    const [joinId, setJoinId] = useState('');

    let history = useHistory();

    const [loggedIn, setLoggedIn] = useState(false);
    const [room, setRoom] = useState('');
    const [userName, setUserName] = useState(''); 

    useEffect(() => {
        socket = io(CONNECTION_PORT)
    }, { transport : ['websocket', 'polling', 'flashsocket'] },[])


    const createRoom = async ()=>{
        axios({
            method: 'get',
            url: process.env.REACT_APP_SERVER_ADDR+"/videochat/createroom"
        }).then(res=>{
            if(res.status === 200){
                history.push("/room/"+res.data);
            }
            else{
                toast.error("Something Went Wrong!")
            }
        }).catch(e=>{
            toast.error("Something Went Wrong!")
        })
    }

    const joinRoom = () => {
        socket.emit('join_room', room);
        history.push("/room/"+room);
    }
    

    function joinRoomRender(){
        return (
            <>
                <Form.Control type="text" onChange={(e)=>setRoom(e.target.value)}/>
                <Button variant="secondary" onClick={joinRoom}>Join Room</Button>
            </>
        )
    }

    function createRoomRender(){
        return (
            <>
                <Button variant="warning" onClick={()=>createRoom()}> Create a New Room </Button>
            </>
        )
    }

    return (
        <>
            <div className="chat-interface">
                {!loggedIn ? (
                    <div className="logIn">
                        {createRoomRender()}
                        {joinRoomRender()}
                    </div>
                
                ) : (
                    <h1>You are not logged in</h1>
                )
                
                }
            </div>

            
        </>
    )
}