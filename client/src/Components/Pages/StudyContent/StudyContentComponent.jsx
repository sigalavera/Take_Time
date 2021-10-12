import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from "../../../Redux/Actions/PostAction";
import Search from "../../Features/Search/SearchComponent";

const StudyContent = () => {
    const posts = useSelector(state => state.posts);

    console.log(posts[0]);
    return (
        <div>
            <Search />
            <div>
                {
                    posts?.map((post, key) => {
                        return (
                            <div key={key}>
                                שם המחבר : {post.fullName}
                                <br></br>
                                נושא : {post.title}
                                <br></br>
                                תיאור : {post.content}
                                <br></br>
                                תגובות : {post.comments}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default StudyContent;