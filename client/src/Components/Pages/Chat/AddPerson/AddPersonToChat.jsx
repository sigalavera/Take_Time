import React,{useState,useEffect} from "react";
import { addPerson } from 'react-chat-engine';
import DM from "../DirectChat/DM";
const AddPersonToChat = () =>{
    const [user,setUser] = useState({});
    var myHeaders = new Headers();
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(user),
        redirect: 'follow'
      };
const setNewUser = () =>{
    myHeaders.append("PRIVATE-KEY", "10c0a59f-982c-4535-8ca2-a6d95dfc9598");
    myHeaders.append('Content-Type', 'application/json');

    
}

const getUserFromBroswer = () =>{
   const localStorageResult = localStorage.getItem("userProfile");
    const {result} = JSON.parse(localStorageResult);
    console.log(result);
    setUser({
    username: 'Shlomo1',
    first_name:  'Shlomo11',
    secret: 'Shlomo1'
    })
    setNewUser();
}
 

useEffect(()=>{
    getUserFromBroswer();
    fetch("https://api.chatengine.io/users/",requestOptions)
    .then(res => res.json())
    .then(res1 => console.log(res1))
    .catch(err => console.log(err))
},[])

    return(
    <div>
    <DM userName={user.userName} />
   </div>
    )
}
export default AddPersonToChat;
