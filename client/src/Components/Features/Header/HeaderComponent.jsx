import React,{useEffect,useState} from "react";
import NavBar from "../Navbar/NavbarComponent";
import "./header.css";

const Header = () => {
  const [userName,setUserName] = useState("Take time");
  const [avatar, setAvatar] = useState("");

  const getUserName = () => {
   let data = localStorage.getItem("userProfile");
   if(data){
    data = JSON.parse(data);
    console.log(data);
    setUserName(data.result.email);
    setAvatar(data.result.imageUrl);

   }
   else{
     return
   }
  }

  useEffect(()=>{
    getUserName();
    console.log(userName);
  },[avatar])
  return (
    <div className="continer">
      <NavBar/>
      <div>
        <img src={avatar} alt="" />
        <h1>{userName}</h1>
        </div>
    </div>
  );
};
export default Header;
