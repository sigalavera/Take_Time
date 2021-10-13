import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../../api";

const UserProfile = () => {
    const [users, setUsers] = useState([]);
    // const user = JSON.parse(localStorage.getItem("userProfile")).result;

    useEffect(() => {
        getAllUsers()
        .then(res => setUsers(res))
    }, [])

    console.log(users);
    return (
        users.map((item, key) => {
            return (
                <div key={key}>
                    <h3> {item?.name}</h3>
                    <h3>{item?.email}</h3>
                </div>
            )
        })
    )
}
export default UserProfile;