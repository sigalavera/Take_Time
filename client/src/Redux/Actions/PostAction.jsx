import { GET_POSTS } from "./types";

export const getPosts = () => async dispatch => {
    await fetch()
        .then((res) => dispatch({
            type: GET_POSTS,
            payload: res.data
        }))
        .catch(error => {console.log(error)})
}