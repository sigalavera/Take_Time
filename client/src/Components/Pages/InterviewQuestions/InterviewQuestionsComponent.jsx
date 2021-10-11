import React from "react";
import AddQuestion from "../../Features/AddQuestion/AddQuestionComponent";
import ReadingQuestions from "../../Features/ReadingQuestions/ReadingQuestionsComponent";

const InterviewQuestions = () => {
    return (
        <>
            {/* <h1>
                Interview questions
            </h1> */}
            <AddQuestion />
            <ReadingQuestions />
        </>
    )
}
export default InterviewQuestions;