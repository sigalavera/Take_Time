import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Pagination  from "../Pagination/Pagination";

function useQuery() {
    return new URLSearchParams(useLocation().search)
}

const ReadingQuestions = () => {
    const query = useQuery()
    const history = useHistory()
    const page = query.get('page') || 1
    const searchQuery = query.get('searchQuery')
    const [search,setSearch]= useState('')

    const searchQution =()=>{
        if (search.trim()){
            //fetch search qution
        }else{
            history.push('/InterviewQuestions')
        }
    }

const handleKeyPress = (e)=>{
    if (e.keyCode === 13){
        searchQution()
    }
}
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
      <div>
          <input onKeyPress={handleKeyPress} vlaue={search} placeholder='Search' name='search' type="text" onChange={(e)=>setSearch(e.target.value)} />
          <button onClick={searchQution} >Search</button>
      </div>
      
      <Pagination/>
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
