import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="loginForm" title="Please log in" component={LoginForm} />
        </Scene>
        <Scene key="main" >
          <Scene
            key="employeesList"
            title="Employees"
            component={EmployeeList}
            rightTitle="Add"
            onRight={() => Actions.employeeCreate()} />

        <Scene key="employeeCreate" title="Create Employee" component={EmployeeCreate} />
        <Scene key="employeeEdit" title="Edit Employee" component={EmployeeEdit} />

        </Scene>
      </Scene>
    </Router>
  );
}

export default RouterComponent;
