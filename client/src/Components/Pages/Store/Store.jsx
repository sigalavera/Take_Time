import React,{useEffect,useState} from "react";
import './store.css'
const Store = () =>{
 const [products,setProducts] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:5000/post/getAllPosts")
    .then(res => res.json())
    .then(products => setProducts(products.Posts))
  },[]);
  console.log(products);

    return(
     <div className="store-container">
     {
         products.map((item)=>{
             return(
                 <div key={item._id}>
                  <h1>{item.fullName}</h1>
                  <h3>{item.title}</h3>
                  <h5>{item.content}</h5>
                  <div className="features-container">
                  <p>rating</p>
                  <p>Chat</p>
                  </div>
                 </div>
             )
         })
     }
     
     </div>
    )
}
export default Store;