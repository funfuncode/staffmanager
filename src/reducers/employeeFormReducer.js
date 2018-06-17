import * as actiontypes from '../actions/actiontypes';

const initState = { name: '', phone: '', shiftDay: '' };

export default (state = initState, action) => {
  switch(action.type){
    case actiontypes.UPDATE_EMPLOYEE :
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
}
