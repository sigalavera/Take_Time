import React, { useState } from "react";

const AddQuestion = () => {
    
    return (
        <div>
            <h1> דוגמא לשאלה </h1>

            <textarea name="question" cols="30" rows="2" placeholder="הקלד שאלה" ></textarea>
            <br></br>
            <textarea name="answer" cols="30" rows="2" placeholder="הקלד תשובה"></textarea>
            <br></br>
            <button type="submit"> שלח </button>
        </div>
    )
}
export default AddQuestion;