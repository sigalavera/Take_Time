import React, { useState } from "react";

const AddQuestion = () => {
    const [newQuestion, setNewQuestion] = useState({
        question: "",
        answer: "",
        createdAt: ""
    })

    fetch("http://localhost:5000/question/getAlllQuestions")
    const handleChange = (e) => {
        setNewQuestion(
            {
                ...newQuestion, 
                [e.target.name]: e.target.value
            }
        )
    }
    return (
        <div>
            <h1> דוגמא לשאלה </h1>

            {/* <textarea name="question" cols="30" rows="2" placeholder="הקלד שאלה" onChange={(e)=>{handleChange(e)}}></textarea> */}
            <br></br>
            {/* <textarea name="answer" cols="30" rows="2" placeholder="הקלד תשובה" onChange={(e)=>{handleChange(e)}}></textarea> */}
            <br></br>
            <button type="submit"> שלח </button>
        </div>
    )
}
export default AddQuestion;