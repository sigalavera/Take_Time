import React,{useEffect,useState} from "react";
import './store.css'
import PostPaginate from "../../Features/Pagination/PostPagination";
import { useHistory, useLocation } from "react-router";
import { getStorePosts } from "../../../api";

function useQuery() {
    return new URLSearchParams(useLocation().search)
}

const Store = () =>{

    const [products,setProducts] = useState([]);
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
    getStorePosts(page).then(data => setProducts(data?.data))
  
  }, [page])


//   useEffect(()=>{
//     fetch("http://localhost:5000/post/getAllPosts")
//     .then(res => res.json())
//     .then(products => setProducts(products.Posts))
//   },[]);
  console.log(products);

    return(
     <div className="store-container">
         <PostPaginate page={page}/>
     {
         products.map((item)=>{
             return(
                 <div key={item._id}>
                  <h1>{item.fullName}</h1>=
                  <h3>{item.title}</h3>
                  <h5>{item.content}</h5>
                  <div className="features-container">
                  <button>rating</button>
                  <button>Chat</button>
                  </div>
                 </div>
             )
         })
     }
     
     </div>
    )
}
export default Store;