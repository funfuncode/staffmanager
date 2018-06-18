import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import * as actiontypes from './actiontypes';

export const updateEmployee = ({ prop, value }) => {
    return {
      type: actiontypes.UPDATE_EMPLOYEE,
      payload: { prop, value }
    }
};

export const createEmployee = ({ name, phone, shiftDay }) => {
  return (dispatch) => {
    const userId = firebase.auth().currentUser.uid;
    firebase.database().ref(`/users/${userId}/employees`)
      .push( { name, phone, shiftDay })
      .then( () => {
        dispatch({ type: actiontypes.CLEAR_EMPLOYEE_FORM });
        Actions.pop();
      });
  }
};

export const fetchEmployees = () => {
  return (dispatch) => {
    const userId = firebase.auth().currentUser.uid;
    firebase.database().ref(`/users/${userId}/employees`).on('value', (snapshot) => {
      console.log(snapshot.val());
    dispatch({
        type: actiontypes.FETCH_EMPLOYEES_SUCCESS,
        payload: snapshot.val()
      });
    });
  }
};

export const initEditForm = (employee) => {
  return {
    type: actiontypes.INIT_EDIT_FORM,
    payload: employee
  }
};

export const editEmployee = ({ uid, name, phone, shiftDay }) => {
  return (dispatch) => {
    const userId = firebase.auth().currentUser.uid;
    firebase.database().ref(`/users/${userId}/employees/${uid}`)
      .update( { name, phone, shiftDay })
      .then(() => {
        dispatch({ type: actiontypes.CLEAR_EMPLOYEE_FORM });
        Actions.pop();
      });
  }
};

export const fireEmployee = (uid) => {
  return (dispatch) => {
    const userId = firebase.auth().currentUser.uid;
    firebase.database().ref(`/users/${userId}/employees/${uid}`)
      .remove()
      .then(() => {
        dispatch({ type: actiontypes.CLEAR_EMPLOYEE_FORM });
        Actions.pop();
      });
  }
};
