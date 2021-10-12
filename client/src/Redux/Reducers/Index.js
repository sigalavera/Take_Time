import { combineReducers } from "redux";
import PostReducer from "./PostReducer";
import auth from "./auth";
export default combineReducers({
  PostReducer,
  auth,
});
