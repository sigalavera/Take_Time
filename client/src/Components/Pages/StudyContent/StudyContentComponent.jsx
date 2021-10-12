import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { getPosts } from "../../../Redux/Actions/PostAction";
const StudyContent = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])
    return (
        <div>

        </div>
    )
}
export default StudyContent;