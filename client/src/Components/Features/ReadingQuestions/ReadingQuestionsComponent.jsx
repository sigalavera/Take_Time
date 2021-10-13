import React, { useEffect, useState } from "react";

const ReadingQuestions = () => {
  const [showQuestion, setShowQuestion] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/question/getAlllQuestions")
      .then((res) => res.json())
      .then((data) => setShowQuestion(data.questions))
  }, [])

  console.log(showQuestion);

  return (
    <div>
      {
        showQuestion?.map((item, key) => {
          return (
            <div key={key}>
              <div>
                תאריך יצירה : {item.createdAt}
                <br></br>
                שאלה : {item.question}
                <br></br>
                תשובה : {item.answer}
                <hr></hr>
              </div>
            </div>
          )
        })
      }
    </div>
  )


};
export default ReadingQuestions;
