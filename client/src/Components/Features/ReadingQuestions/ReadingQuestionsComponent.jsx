import React, { useState } from "react";

const ReadingQuestions = () => {
  const [questions, setQuestions] = useState([
    {
      q: "מצא את המספר שחוזר על עצמו הכי הרבה בתוך מערך",
      a: "sdhjflsdfhsdjlh sdfljhsdfljhs sdlfjh sjldf ",
    },
    {
      q: "מצא את כל זוגות המספרים שסכומם הוא 10 במערך",
      a: "sdhjflsdfhsdjlh sdfljhsdfljhs sdlfjh sjldf ",
    },
    {
      q: "במערך, מצא את האיבר היחיד שאינו חוזר על עצמו",
      a: "sdhjflsdfhsdjlh sdfljhsdfljhs sdlfjh sjldf ",
    },
    {
      q: "במערך, מצא את האיבר היחיד שאינו חוזר על עצמו",
      a: "sdhjflsdfhsdjlh sdfljhsdfljhs sdlfjh sjldf ",
    },
    {
      q: "הפוך מחרוזת (ללא שימוש ב-reverse)        ",
      a: "sdhjflsdfhsdjlh sdfljhsdfljhs sdlfjh sjldf ",
    },
    {
      q: "בדוק האם מחרוזת היא מראה למחרוזת אחרת        ",
      a: "sdhjflsdfhsdjlh sdfljhsdfljhs sdlfjh sjldf ",
    },
  ]);
  return (
    <div>
      <h1> שאלה לדוגמא </h1>
      {questions.map((q) => (
        <div>
          <p>{q.q}</p>
          <p>{q.a}</p>
        </div>
      ))}
    </div>
  );
};
export default ReadingQuestions;
