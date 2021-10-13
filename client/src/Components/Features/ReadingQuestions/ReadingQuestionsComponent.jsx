import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { getPosts } from "../../../api";
  import Pagination  from "../Pagination/Pagination";
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
    getPosts(page).then(data => setShowQuestion(data?.data))
  
  }, [page])

  console.log(showQuestion);

  return (
    <div>
        <div>
          <input onKeyPress={handleKeyPress} vlaue={search} placeholder='Search' name='search' type="text" onChange={(e)=>setSearch(e.target.value)} />
          <button onClick={searchQution} >Search</button>
      </div>
     
 <Pagination page={page} />
      {
        showQuestion?.map((item, key) => (
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
          
        ))
      }
    </div>
  )


};
export default ReadingQuestions;
