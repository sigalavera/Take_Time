import { addPerson } from 'react-chat-engine';

const AddPersonToChat = () =>{
    const authObject = {"Project-ID": "654ce782-8e95-433a-b3d6-11e63df52204", 'User-Name': "Shlomo", 'User-Secret': 'Liorlsa9'}
    const chatID = 12;
    const username = 'Shlomo';
    const callback = (chatID, data) => console.log(chatID, data)
    addPerson(authObject, chatID, username, callback)
    return(
    <div>
    <h1>sdads</h1>
   </div>
    )
}
export default AddPersonToChat;