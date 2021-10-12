import React from "react";
import InterviewQuestions from "../InterviewQuestions/InterviewQuestionsComponent";
import StudyContent from "../StudyContent/StudyContentComponent";
import "./home.css";

const Home = () => {
    return (
        <div className="continer-home">
            <button>
                שאלות ראיון
            </button>

            <button>
                עזרה לימודית
            </button>
        </div>
    )
}
export default Home;