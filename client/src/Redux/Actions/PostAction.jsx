import { GET_POSTS } from "./types";

export const getPosts = () => async dispatch => {
    await fetch("http://localhost:5000/post/getAllPosts")
        .then((res) => res.json())
        .then((res)=> console.log(res.Posts))
        .then((res) => dispatch({
            type: GET_POSTS,
            payload: res.Posts
        }))
        .catch(error => { console.log(error) })
}