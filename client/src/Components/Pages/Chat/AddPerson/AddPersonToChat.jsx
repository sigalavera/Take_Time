<<<<<<< HEAD
import React,{useState,useEffect} from "react";
import { addPerson } from 'react-chat-engine';
import DM from "../DirectChat/DM";
const AddPersonToChat = () =>{
    const authObject = {"Project-ID": "654ce782-8e95-433a-b3d6-11e63df52204", 'User-Name': "Shlomo", 'User-Secret': 'Liorlsa9'}
    const chatID = 121;
    const username = 'Shlomo';
    const callback = (chatID, data) => console.log(chatID, data)
    addPerson(authObject, chatID, username, callback)
    useEffect(()=>{
     fetch("https://api.chatengine.io/chats/{{chat_id}}/people/",{
         method:"POST",
         headers:authObject,
         body:{
                person: {
                  username: "bob_baker",
                  first_name: null,
                  last_name: null,
                  avatar: null,
                  is_online: false
                }
         }
     })
     .then(res => res.json())
     .then(res => console.log(res))
    },[])

    return(
    <div>
    <DM userName="{}" />
   </div>
    )
}
export default AddPersonToChat;
=======
// import React,{useState,useEffect} from "react";
// import { addPerson } from 'react-chat-engine';
// import DM from "../DirectChat/DM";
// const AddPersonToChat = () =>{
//     const authObject = {"Project-ID": "654ce782-8e95-433a-b3d6-11e63df52204", 'User-Name': "Shlomo", 'User-Secret': 'Liorlsa9'}
//     const chatID = 121;
//     const username = 'Shlomo';
//     const callback = (chatID, data) => console.log(chatID, data)
//     addPerson(authObject, chatID, username, callback)
//     useEffect(()=>{
//      fetch("https://api.chatengine.io/chats/{{chat_id}}/people/",{
//          method:"POST",
//          headers:authObject,
//          body:{
//                 person: {
//                   username: "bob_baker",
//                   first_name: null,
//                   last_name: null,
//                   avatar: null,
//                   is_online: false
//                 }
//          }
//      })
//      .then(res.json())
//      .then(res => console.log(res))
//     },[])

//     return(
//     <div>
//     <DM userName={} />
//    </div>
//     )
// }
// export default AddPersonToChat;
>>>>>>> 45f0f23c0e9d6c77474d48d119af318609eb59fa
