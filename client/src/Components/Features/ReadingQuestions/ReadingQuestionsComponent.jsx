import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { getPosts } from "../../../api";
import Pagination from "../Pagination/Pagination";
import AddQuestion from "../AddQuestion/AddQuestionComponent";
function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const ReadingQuestions = () => {
    const [showAnswer,setShowAnswer] = useState('white')
    const [showQuestion, setShowQuestion] = useState([]);
    const query = useQuery()
    const history = useHistory()
    const page = query.get('page') || 1
    const searchQuery = query.get('searchQuery')
    const [search,setSearch]= useState('')

  const searchQution = () => {
    if (search.trim()) {
      //fetch search qution
    } else {
      history.push('/InterviewQuestions')
    }
  }

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchQution()
    }
  }


  useEffect(() => {
    getPosts(page).then(data => setShowQuestion(data?.data))

  }, [page])

  console.log(showQuestion);
  const answerOnClick =()=>{
    if(showAnswer==="white"){
      setShowAnswer("black")
    }else{
      setShowAnswer("white")
    }
  }
  return (
    <div>
      <AddQuestion />
      <div>
        <input onKeyPress={handleKeyPress} vlaue={search} placeholder='Search' name='search' type="text" onChange={(e) => setSearch(e.target.value)} />
        <button onClick={searchQution} >Search</button>
      </div>

      <Pagination page={page} />
      {
        showQuestion?.map((item, key) => (
            <div onClick={answerOnClick} key={key}>
              <div>
              <p> שאלה : {item.question}</p> 
                <br></br>
              <p > תשובה : <span style={{color:showAnswer}}>{item.answer}</span> </p> 
                <br></br>
                <p>תאריך יצירה : {item.createdAt}</p>
                
                <hr></hr>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )


};
export default ReadingQuestions;
