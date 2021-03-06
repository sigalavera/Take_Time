import React from "react";
import { useHistory } from "react-router-dom";
import "./home.css";

const Home = () => {
  const history = useHistory();
  const InterviewQuestions = () => history.push("/InterviewQuestions");
  const Store = () => history.push("/Store");

  return (
    <div className="continer-home">
            <div className="continer-class">
                <h1>Take Time .</h1>
             </div> 
             <div className="btn-home"> 
            <button onClick={InterviewQuestions}>
                שאלות ראיון
            </button>

            <button onClick={Store}>
                עזרה לימודית
            </button>
            </div> 
        </div>
  );
};
export default Home;
