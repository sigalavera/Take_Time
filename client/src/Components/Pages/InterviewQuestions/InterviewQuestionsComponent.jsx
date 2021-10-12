import React, { useEffect } from "react";
import AddQuestion from "../../Features/AddQuestion/AddQuestionComponent";
import ReadingQuestions from "../../Features/ReadingQuestions/ReadingQuestionsComponent";
import Search from "../../Features/Search/SearchComponent";

const InterviewQuestions = () => {
    return (
        <>
            <Search />
            <AddQuestion />
            <ReadingQuestions />
        </>
    )
}
export default InterviewQuestions;