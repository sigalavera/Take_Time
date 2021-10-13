import { ChatEngine, getOrCreateChat } from "react-chat-engine";
import "./chat.css";
import { useState } from "react";

const ChatContainer = () => {
  const [username, setUsername] = useState("");

  function createDirectChat(creds) {
    getOrCreateChat(
      creds,
      { is_direct_chat: true, usernames: [username] },
      () => setUsername("")
    );
  }

  function renderChatForm(creds) {
    return (
      <div>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={() => createDirectChat(creds)}>Create</button>
      </div>
    );
  }
  return (
    <div className="chat-container">
      <ChatEngine
        height="100vh"
        width="100px"
        projectID="4842da7f-9657-46bc-9d78-2e55c6ab09b8"
        userName="shlomo"
        userSecret="123456"
        renderNewChatForm={(creds) => renderChatForm(creds)}
      />
    </div>
  );
};

export default ChatContainer;
