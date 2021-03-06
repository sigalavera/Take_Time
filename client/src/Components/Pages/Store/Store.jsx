import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './store.css'

// const Store = () => {
//     const [products, setProducts] = useState([]);
//     const history = useHistory();
//     const DirectChatPage = () => history.push('/DirectChatPage');

//     useEffect(() => {
//         fetch("http://localhost:5000/post/getAllPosts")
//             .then(res => res.json())
//             .then(products => setProducts(products.Posts))
//     }, []);
//     console.log(products);

//     return (
//         <div className="store-container">
//             {
//                 products.map((item) => {
//                     return (
//                         <div key={item._id}>
//                             <h1>{item.fullName}</h1>
//                             <h3>{item.title}</h3>
//                             <h5>{item.content}</h5>
//                             <div className="features-container">
//                                 <button>rating</button>
//                                 <button
//                                     onClick={DirectChatPage}>
//                                     Chat
//                                 </button>
//                             </div>
//                         </div>
//                     )
//                 })
//             }

//         </div>
//     )
// }

import PostPaginate from "../../Features/Pagination/PostPagination";
import { useHistory, useLocation } from "react-router-dom";
import { getAllUsers, getStorePosts } from "../../../api";
import AddPost from "../../Features/addPost/AddPost";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Store = () => {
    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);
    const query = useQuery();
    const history = useHistory();
    const page = query.get("page") || 1;
    const searchQuery = query.get("searchQuery");
    const [search, setSearch] = useState("");

    const searchQution = () => {
        if (search.trim()) {
            //fetch search qution
        } else {
            history.push("/InterviewQuestions");

        }
    };


    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            searchQution();
        }
    };

    useEffect(() => {
        getStorePosts(page).then((data) => setProducts(data.data));
        getAllUsers().then((data) => setUsers(data));

        getStorePosts(page).then((data) => setProducts(data?.data));
        // getAllUsers().then((data) => setUsers(data));
    }, [page]);

    console.log(users);

    return (
        <div className="body-store">
            <div className="search">
                <div className="title-store">
                    <h1>Store</h1>
                </div>
                <div>
                    <input type="text" placeholder="Type to search" />
                    <label> ?????????? </label>
                </div>
            </div>
            <div className="store-container">
                <div className="body-input">
                <AddPost />
                <PostPaginate page={page} />
                </div>
                {products.map((item, index) => {
                    return (
                        <div key={item._id}>
                            <div className="card-container">
                                <div className="user">
                                <img src={users.users[index].imageUrl} alt="" />
                                <h1>{users.users[index].name}</h1>
                                </div>
                                <div className="info">
                                <h3>{item.title}</h3>
                                <h5>{item.content}</h5>
                                </div>
                                <div className="features-container">
                                    <button>rating</button>
                                    <button>Chat</button>
                                </div>
                            </div>
                        </div>
                    );
                })}
               
                
                {
                    products?.map((item) => {
                        return (
                            <div key={item._id}>
                                <div className="card-container">
                                <div className="user">
                                
                                    <h1>{item?.fullName}</h1>
                                </div>
                                <div className="info">
                                    <h3>{item?.title}</h3>
                                    <h5>{item?.content}</h5>
                                </div>
                                <div className="features-container">
                                    <button>rating</button>
                                    <button>Chat</button>
                                </div>
                            </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};
export default Store;
