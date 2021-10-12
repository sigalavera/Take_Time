import React from "react";
import { GoogleLogin } from 'react-google-login';
import "./login.css";

const Login = () => {
    const googleFailure = () => {
        console.log("fuck off");
    }

    const googleSuccess = (res) => {
        console.log(res);
    }
    return (
        <div>
            <div>
            <h1> Take Time </h1>
            <p>
                אתר כללי לרכישה ומכירת שעות תרגול ושאלות ראיון בתחום הייטק.
            </p>
            </div>
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
    )
}
export default Login;