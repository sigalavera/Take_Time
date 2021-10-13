import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  const hendelClick = () => {
    localStorage.clear();
  };
  return (
    <div className="continer-nav-link">
      <nav className="link-bar">
        
        <ul>
          <li>
            <Link to="/"> </Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/chat">Chat</Link>
          </li>
          <li>
            <Link to="/InterviewQuestions">Interview Questions</Link>
          </li>
          <li>
            <Link to="/Store">Study Content</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default NavBar;
