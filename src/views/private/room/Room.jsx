import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Button } from "react-bootstrap";
import Peer from 'peerjs';
import axios from 'axios';
import { toast } from 'react-toastify';
export default function Room (){


    const {
        roomId
    } = useParams();


    const [peerId, setPeerId] = useState('');
    const [otherPeers, setOtherPeers] = useState({
        otherUsers:[]
    });
    let [peer, setPeer] = useState();


    useEffect(()=>{
       addPeer();
       getAllPeers();
    },[]);

    function addPeer(){
        axios({
            method:"put",
            url: process.env.REACT_APP_SERVER_ADDR+"/videochat/addpeer",
            data: {
                roomId: roomId,
                userName: "userNameData"
            }
        }).then(res=>{
            console.log(res);
            if(res.status === 200){
                setPeerId(res.data)
                createPeer();

            }
            else{
                toast.error("Something Went Wronggg!");
            }
        })
    }
 

    function getAllPeers(){
        axios({
            method:"get",
            url: process.env.REACT_APP_SERVER_ADDR+"/videochat/getallpeers/"+roomId,
        }).then(res=>{
            if(res.status === 200){
                setOtherPeers(res.data)
                console.log(otherPeers);
            }
            else{
                toast.error("Something Went Wrongggg!");
            }
        }).catch(e=>{
            toast.error("Something Went Wrongggg!");
        })
    }


    function createPeer(){
        const peer = new Peer(peerId,{
            host: 'localhost',
            port: 4000,
            path:'/peer/videochat',
            debug:3
        });
        setPeer(peer);
        peer.on('connection', function(conn){
            console.log("conn");
        })
        // recieveConnection();
    }

    function recieveConnection(){
        peer.on('connection', function(conn){
            console.log("conn");
        })
    }  

    function connectToPeer(peerId){
        const conn = peer.connect(peerId);
        try{
            conn.on('open', () => {
                conn.send('hi!');
              });
        }
        catch(e){
            console.log(e);
        }
        console.log(conn);
    }

    function renderPeers(){
        if(otherPeers.otherUsers.length > 0 ){
            return (
                otherPeers.otherUsers.map((data,index)=>{
                    return (
                        <>
                            <div>
                            <Button onClick={()=>connectToPeer(data.peerId)}> {data.peerId}</Button>
                            </div>
                        </>
                    )
                    }
                    ))
        }
        else{
            return (
                <span>No peers</span>
            )
        }
    }
    return (
        <>
            <div>
            RoomId: {roomId}
            </div>
            <div>
            PeerId: {peerId}

            </div>
            {
                renderPeers()
            }
        </>
    )
}