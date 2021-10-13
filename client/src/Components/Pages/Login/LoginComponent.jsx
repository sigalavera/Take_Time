import React from "react";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import "./login.css";
import { AUTH } from "../../../Redux/Actions/types";
import { signIn } from "../../../api";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const googleFailure = () => {
    console.log("Google Sing In was unuccessful. Try Again Later.");
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    localStorage.setItem("userProfile", JSON.stringify({ result, token }));

    try {
      signIn({ data: { result, token } });
      console.log(res);
      
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="body-log">
      <div className="title-log">
        <h1> Take Time </h1>
        <p>
          אתר כללי לרכישה ומכירת שעות תרגול <br></br>. ושאלות ראיון בתחום הייטק
        </p>
      </div>
      <div className="continer-btn-log">
        <GoogleLogin
          clientId="1010289593521-j7qff0ed24beejl2ij3hrt9fii0k7k9i.apps.googleusercontent.com"
          render={(renderProrps) => (
            <button
              className="btn"
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
    </div>
  );
};
export default Login;
