import React from "react";
import { Link } from "react-router-dom";
import Login from "../../Pages/Login/LoginComponent";

const NavBar = () => {
    return (
        <nav>
            <div>
                <Login />
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
    );
};
export default NavBar;