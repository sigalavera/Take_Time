import React,{useState,useEffect} from "react";

const Coins = () => {
    const [coins,setCoins] = useState(Math.floor(10 * Math.random()));
      
    useEffect(()=>{
    // fetch to user and get coins for the spcific user

    })

    return (
        <h2>{coins}</h2>
    )
}
export default Coins;