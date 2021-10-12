import React from "react";
import { useHistory } from 'react-router-dom';
import InterviewQuestions from "../InterviewQuestions/InterviewQuestionsComponent";
import StudyContent from "../StudyContent/StudyContentComponent";
import "./home.css";

const Home = () => {
    const history = useHistory();
    const InterviewQuestions = () => history.push('/InterviewQuestions');
    const StudyContent = () => history.push('/StudyContent');
    
    return (
        <div className="continer-home">
            <div className="continer-class">
             </div> 
             <div className="btn-home"> 
            <button onClick={InterviewQuestions}>
                שאלות ראיון
            </button>

            <button onClick={StudyContent}>
                עזרה לימודית
            </button>
            </div> 
        </div>
    )
}
export default Home;