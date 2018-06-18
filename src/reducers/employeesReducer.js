import * as actiontypes from '../actions/actiontypes';

const initState = {};

export default (state = initState, action) => {
  switch(action.type){
    case actiontypes.FETCH_EMPLOYEES_SUCCESS :
      if(action.payload !== null){
        return action.payload;
      }
        return state;
    default:
      return state;
  }
}
