import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
function useQuery() {
    return new URLSearchParams(useLocation().search)
}



const ReadingQuestions = () => {
    const [showQuestion, setShowQuestion] = useState([]);
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


  useEffect(() => {
    fetch("http://localhost:5000/question/getAlllQuestions")
      .then((res) => res.json())
      .then((data) => setShowQuestion(data.questions))
  }, [])

  console.log(showQuestion);

  return (
    <div>
        <div>
          <input onKeyPress={handleKeyPress} vlaue={search} placeholder='Search' name='search' type="text" onChange={(e)=>setSearch(e.target.value)} />
          <button onClick={searchQution} >Search</button>
      </div>
      {
        showQuestion?.map((item, key) => {
          return (
            <div key={key}>
              <div>
                שאלה : {item.question}
                <br></br>
                תשובה : {item.answer}
                <br></br>
                תאריך יצירה : {item.createdAt}
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
