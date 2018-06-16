import firebase from 'firebase';
import * as actiontypes from './actiontypes';


export const changeEmail = (email) => {
  return {
    type: actiontypes.CHANGE_EMAIL,
    payload: email
  }
};

export const changePassword = (password) => {
  return {
    type: actiontypes.CHANGE_PASSWORD,
    payload: password
  }
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: actiontypes.LOGIN_USER_SUCCESS,
    payload: user
  });
};

const loginUserFail = (dispatch, error) => {
  dispatch({
    type: actiontypes.LOGIN_USER_FAIL,
    payload: error
  });
}

export const loginUser = (email, password) => {
  return (dispatch) => {
    dispatch({type: actiontypes.LOGIN_USER_START});
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then( (res) => loginUserSuccess(dispatch, res) )
      .catch( () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then( (res) => loginUserSuccess(dispatch, res) )
          .catch( (error) => loginUserFail(dispatch, error) )
      });
  }
};
