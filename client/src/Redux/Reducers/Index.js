import { combineReducers } from "redux";
import PostReducer from "./PostReducer";
<<<<<<< HEAD
import auth from "./auth";
export default combineReducers({
  PostReducer,
  auth,
=======
import authReducer from "./auth";
import caseReducer from "./caseReducer";
export default combineReducers({
  PostReducer,
  authReducer,
  caseReducer
>>>>>>> c17302a90373b035de29d10f31f2843fd3687b8c
});
