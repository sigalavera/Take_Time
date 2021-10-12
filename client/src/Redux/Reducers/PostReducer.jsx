import { GET_POSTS } from '../Actions/types'

const PostReducer = (posts = {}, action) => {
  switch (action.type) {
    case GET_POSTS:
      debugger
      return action.payload

    default:
      return posts;
  }
}

export default PostReducer