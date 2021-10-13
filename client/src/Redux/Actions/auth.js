import { AUTH } from "../constans/actionTypes";
import * as api from "../../api/index";
import axios from "axios";

export const signin = (userData, history) => async (dispatch) => {
  try {
     
    const { data } = await api.signIn(userData);
    dispatch({ type: AUTH, data: data });
    let chatData = `{
        "username": "${data.result.name}",
        "secret": "${data.result.googleId}",
        "email": "${data.result.email}",
        "first_name": "${data.result.givenName}",
        "last_name": "${data.result.familyName}"
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

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
