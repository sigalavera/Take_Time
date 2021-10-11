import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <h1>
      HEADER
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/chat">Chat</Link>
          </li>
        
        </ul>
      </nav>
    </h1>
  );
};
export default Header;
