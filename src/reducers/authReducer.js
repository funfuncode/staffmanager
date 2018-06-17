import * as actiontypes from '../actions/actiontypes';

const initState = { email: '', password: '', authenticating: false, error: '', user: null };

export default (state = initState, action) => {

  switch(action.type){
    case actiontypes.CHANGE_EMAIL :
      return {...state, email: action.payload };
    case actiontypes.CHANGE_PASSWORD :
      return { ...state, password: action.payload };
    case actiontypes.LOGIN_USER_START :
      return { ...state, authenticating: true, error: '' };
    case actiontypes.LOGIN_USER_SUCCESS :
      return { ...state, ...initState, user: action.payload };
    case actiontypes.LOGIN_USER_FAIL :
      return { ...state, authenticating: false, error: action.payload };
    default :
      return state;
  }
}
