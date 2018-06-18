import * as actiontypes from '../actions/actiontypes';

const initState = {};

export default (state = initState, action) => {
  switch(action.type){
    case actiontypes.FETCH_EMPLOYEES_SUCCESS :
      return action.payload;
    default:
      return state;
  }
}
