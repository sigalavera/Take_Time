import React from "react";
import { GoogleLogin } from "react-google-login";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import NavBar from "../../Features/Navbar/NavbarComponent";
import { AUTH } from "../../../Redux/Actions/types";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const googleFailure = () => {
    console.log("fuck off");
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
     dispatch({ type: AUTH, data: { result, token } });
     console.log(res);
     let data = `{
   "username": "${res.profileObj.name}",
   "secret": "secret-123-jBj02",
   "email": "${res.profileObj.email}",
   "first_name": "${res.profileObj.givenName}",
   "last_name": "${res.profileObj.familyName}"
     }`;
 
     let config = {
       method: "post",
       url: "https://api.chatengine.io/users/",
       headers: "PRIVATE-KEY : f6095433-da83-4fba-b6d7-cf422d6293b5",
       data: data,
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
  return (
    <div>
      <h1> Take Time </h1>
      <p>אתר כללי לרכישה ומכירת שעות תרגול ושאלות ראיון בתחום הייטק.</p>
      <GoogleLogin
        clientId="1010289593521-j7qff0ed24beejl2ij3hrt9fii0k7k9i.apps.googleusercontent.com"
        render={(renderProrps) => (
          <button
            color="blue"
            onClick={renderProrps.onClick}
            disabled={renderProrps.disabled}
            variant="contained"
          >
            Google sing in
          </button>
        )}
        onSuccess={googleSuccess}
        onFailure={googleFailure}
        cookiePolicy="single_host_origin"
      />
    </div>
  );
};
export default Login;
