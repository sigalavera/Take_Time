import { GET_POSTS } from "./types";

export const getPosts = () => async dispatch => {
    await fetch("http://localhost:5000/post/getAllPosts")
        .then((res) => res.json())
        // .then((res)=> console.log(res.Posts))
        .then((res) => dispatch({
            type: GET_POSTS,
            payload: res.Posts
        }))
        .catch(error => { console.log(error) })
}


// import * as api from '../../api/index';
// import { GET_POSTS } from '../Actions/types';
// const getPosts = () => async (dispatch) => {
//     try {
//         const { data } = await api.getPosts()
//         dispatch({ type: GET_POSTS, payload: data })
//     } catch (error) {
//         console.log(err.message);
//     }
// }