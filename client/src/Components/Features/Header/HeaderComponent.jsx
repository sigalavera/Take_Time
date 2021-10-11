import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="continer">
      <h1>kdkdkdkd</h1>
      <nav className="link-bar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/chat">Chat</Link>
          </li>
          <li>
            <Link to="/InterviewQuestions">Interview Questions</Link>
          </li>
          <li>
            <Link to="/StudyContent">Study Content</Link>
          </li>
        </ul>
      </nav>
      <div className="logo">
      <h1>Take Time</h1>
      </div>
    </div>
  );
};
export default Header;
