import * as actiontypes from '../actions/actiontypes';

const initState = { name: '', phone: '', shiftDay: '' };

export default (state = initState, action) => {
  switch(action.type){
    case actiontypes.UPDATE_EMPLOYEE :
      return { ...state, [action.payload.prop]: action.payload.value };
    case actiontypes.CLEAR_EMPLOYEE_FORM :
      return initState;
    case actiontypes.INIT_EDIT_FORM :
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
