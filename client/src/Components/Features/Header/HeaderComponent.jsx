import React, { useEffect, useState } from "react";
import NavBar from "../Navbar/NavbarComponent";
import "./header.css";
import Coins from "../Coins/Coins";
const Header = () => {
  const [userName, setUserName] = useState("Take time");
  const [avatar, setAvatar] = useState("");
  const getUserName = () => {
    let data = localStorage.getItem("userProfile");
    if (data) {
      data = JSON.parse(data);
      console.log(data);
      setUserName(data.result.email);
      setAvatar(data.result.imageUrl);

    } else {
      return;
    }
  };


  useEffect(() => {
    getUserName();
  }, [avatar]);
  return (
    <div className="continer">

      <NavBar />
      <div>
        <img src={avatar} alt="" />
        <h1>{userName}</h1>
      </div>
      <Coins />

    </div>
  );
};
export default Header;
