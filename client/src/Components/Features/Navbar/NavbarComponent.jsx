import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
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
                    <Link to="/StudyContent">Study Content</Link>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar;