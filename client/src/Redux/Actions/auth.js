import { AUTH } from "../constans/actionTypes";
import * as api from "../../api/index";
import axios from "axios";

export const signin = (userData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(userData);
<<<<<<< HEAD
    let chatData = `{
        "username": "${data.name}",
        "secret": "${data.googleId}",
        "email": "${data.email}",
        "first_name": "${data.givenName}",
        "last_name": "${data.familyName}"
          }`;
          console.log(data);
           let config = {
             method: "post",
             url: "https://api.chatengine.io/users/",
             headers: "PRIVATE-KEY : f6095433-da83-4fba-b6d7-cf422d6293b5",
             data: chatData,
           };
     
           await axios(config)
             .then(function (response) {
               console.log(JSON.stringify(response.data));
             })
             .catch(function (error) {
               console.log(error);
             });
    dispatch({ type: AUTH, data:data });
=======

    dispatch({ type: AUTH, data: data });
>>>>>>> c17302a90373b035de29d10f31f2843fd3687b8c
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
