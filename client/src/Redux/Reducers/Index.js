import { combineReducers } from "redux";
import PostReducer from "./PostReducer";
import authReducer from "./auth";
export default combineReducers({
  PostReducer,
  authReducer,
});
