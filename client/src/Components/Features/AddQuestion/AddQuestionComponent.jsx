import React, { useState } from "react";

const AddQuestion = () => {
    const [newQuestion, setNewQuestion] = useState({
        question: "",
        answer: "",
        // createdAt: ""
    })

    const createNew = ()=>{
        fetch("http://localhost:5000/question/createQuestion", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ question: newQuestion.question, answer: newQuestion.answer})
        })
            .then((res) => res.json())
            .then((data) => (data))
    }

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

            <textarea name="question" cols="30" rows="2" placeholder="הקלד שאלה" value={newQuestion.question} onChange={(e) => { handleChange(e) }}></textarea>
            <br></br>
            <textarea name="answer" cols="30" rows="2" placeholder="הקלד תשובה" value={newQuestion.answer} onChange={(e) => { handleChange(e) }}></textarea>
            <br></br>
            <button type="submit" onClick={createNew}> שלח </button>
        </div>
    )
}
export default AddQuestion;