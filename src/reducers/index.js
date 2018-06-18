import { combineReducers } from 'redux';
import authReducer from './authReducer';
import employeesReducer from './employeesReducer';
import employeeFormReducer from './employeeFormReducer';

export default combineReducers({
  auth: authReducer,
  employeeForm: employeeFormReducer,
  employees: employeesReducer
});
