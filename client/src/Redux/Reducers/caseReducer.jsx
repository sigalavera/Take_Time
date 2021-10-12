import {GET_CASES,UPDATE_CASE,DELETE_CASE,CREATE_CASE} from "../Actions/types"
const caseReducer =  (cases = [],action) => {
    switch(action.type){
     case GET_CASES:
      console.log(action.payload);
       return action.payload;
     case UPDATE_CASE:
       return [...cases,action.payload];
     case DELETE_CASE:
      cases = cases.map((item)=> item._id !== action.payload._id);
      return cases; 
     case CREATE_CASE:
        return  [...cases,action.payload]
     default:
          return cases;
    }
  }
  
  export default caseReducer; 