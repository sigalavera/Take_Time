import React, { useEffect } from "react";
import Search from "../../Features/Search/SearchComponent";

const StudyContent = () => {


    return (
        <div>
            <Search />
            {/* <div>
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
            </div> */}
        </div>
    )
}
export default StudyContent;