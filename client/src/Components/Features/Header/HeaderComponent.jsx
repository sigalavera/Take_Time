import React, { useEffect, useState } from "react";
import NavBar from "../Navbar/NavbarComponent";
import "./header.css";
import Coins from "../Coins/Coins";
import { useHistory } from "react-router";

const Header = () => {
  const history = useHistory()
  const [userName, setUserName] = useState("Take time");
  const [avatar, setAvatar] = useState("");

  const getUserName = () => {
    let data = localStorage.getItem("userProfile");
    if (data) {
      data = JSON.parse(data);
      console.log(data);
      setUserName(data.result.email);
      setAvatar(data.result.imageUrl);
    }
    else {
      return
    }
  }

  const hendelAvatar = () => history.push('/UserProfile');
  const hendelClick = () => {
    localStorage.clear();
  };

  useEffect(() => {
    getUserName();
  }, [avatar]);
  return (
    <div className="continer">
      <div className="btn-logout">
        <button onClick={hendelClick}> LOGOUT </button>
      </div>
      <NavBar />
      <div className="user-continer">
        <img src={avatar} alt="" onClick={hendelAvatar}/>
        <h2>{userName}</h2>
      </div>
      <Coins />
    </div >
  );
};
export default Header;
