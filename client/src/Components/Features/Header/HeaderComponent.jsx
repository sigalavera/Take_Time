import React from "react";
import { Link } from "react-router-dom";
import Login from "../../Pages/Login/LoginComponent";

const Header = () => {
  return (
    <div>
      HEADER
      <nav>
        <div>
          <Login/>
        </div>
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
    </div>
  );
};
export default Header;
