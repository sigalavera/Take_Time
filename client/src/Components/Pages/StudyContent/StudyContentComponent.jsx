import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from "../../../Redux/Actions/PostAction";
import Search from "../../Features/Search/SearchComponent";

const StudyContent = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts);
    
    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])
    
    console.log(posts);
    return (
        <div>
            <Search />
            <div>
                {
                    posts?.map((post) => {
                        return (
                            <div>
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