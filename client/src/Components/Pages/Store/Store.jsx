import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import './store.css'

const Store = () => {
    const [products, setProducts] = useState([]);
    const history = useHistory();
    const DirectChatPage = () => history.push('/DirectChatPage');

    useEffect(() => {
        fetch("http://localhost:5000/post/getAllPosts")
            .then(res => res.json())
            .then(products => setProducts(products.Posts))
    }, []);
    console.log(products);

    return (
        <div className="store-container">
            {
                products.map((item) => {
                    return (
                        <div key={item._id}>
                            <h1>{item.fullName}</h1>
                            <h3>{item.title}</h3>
                            <h5>{item.content}</h5>
                            <div className="features-container">
                                <button>rating</button>
                                <button
                                    onClick={DirectChatPage}>
                                    Chat
                                </button>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}
export default Store;