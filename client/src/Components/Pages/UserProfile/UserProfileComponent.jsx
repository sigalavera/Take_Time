import React from "react";

const UserProfile = () => {
    const user = JSON.parse(localStorage.getItem("userProfile"));
    return (
        <div>
            <div>{user?.result?.imageUrl?(<h1>{user?.result?.name.charAt(0)}</h1>):<img src={user?.result?.imageUrl} alt="" />}</div>
            <div>{user?.result?.name}</div>
            <div>{user?.result?.email}</div>
            
            
        
        </div>
    )
}
export default UserProfile;