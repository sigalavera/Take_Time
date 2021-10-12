import {GET_CASES} from "../Actions/types"
const caseReducer =  (cases = [],action) => {
    switch(action.type){
     case GET_CASES:
      console.log(action.payload);
       return action.payload;

       default:
           return cases;
    }
  }
  
  export default caseReducer; 