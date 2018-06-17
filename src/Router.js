import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="loginForm" title="Please log in" component={LoginForm} />
        </Scene>
        <Scene key="main" initial>
          <Scene
            key="employeesList"
            title="Employees"
            component={EmployeeList}
            rightTitle="Add"
            onRight={() => Actions.employeeForm()} />

        <Scene key="employeeForm" title="Create Employee" component={EmployeeForm} initial />

        </Scene>
      </Scene>
    </Router>
  );
}

export default RouterComponent;
