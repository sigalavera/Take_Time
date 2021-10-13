import React,{useEffect,useState} from "react";
import NavBar from "../Navbar/NavbarComponent";
import "./header.css";

const Header = () => {
  const [userName,setUserName] = useState();
  const getUserName = () => {
   const {result} = localStorage.getItem("userProfile");
   console.log(JSON.parse(result));
  }
  useEffect(()=>{
    getUserName();
  })
  return (
    <div className="continer">
      <NavBar/>
      <div>
        <h1>HEY</h1>
        </div>
    </div>
  );
};
export default Header;
