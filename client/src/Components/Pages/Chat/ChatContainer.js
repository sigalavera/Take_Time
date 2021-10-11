import { ChatEngine } from "react-chat-engine";

import "./chat.css";

const ChatContainer = () => {
  return (
    <div className="chat-container">
      <ChatEngine height="100vh" projectID="
4842da7f-9657-46bc-9d78-2e55c6ab09b8" userName="shlomo" userSecret="123456" />
    </div>
  );
};

export default ChatContainer;