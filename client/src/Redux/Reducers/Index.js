import { combineReducers } from "redux";
import PostReducer from "./PostReducer";
import authReducer from "./auth";
import caseReducer from "./caseReducer";
export default combineReducers({
  PostReducer,
  authReducer,
  caseReducer
});
