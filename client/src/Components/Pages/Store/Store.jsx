import React, { useEffect, useState } from "react";
import './store.css'
const Store = () => {
    const [products, setProducts] = useState([]);

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
                        <div className="card-container" key={item._id}>
                            <div className="user">
                                <h2>{item.fullName}</h2>
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
                    )
                })
            }

        </div>
    )
}
export default Store;