import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Button } from './common';
import { connect } from 'react-redux';
import * as actions from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {

  onPressButton(){
    const { name, phone, shiftDay } = this.props;

    this.props.onCreateEmployee({ name, phone, shiftDay: shiftDay || 'Monday' });
  }

  render(){

    const employee = this.props.employee;

    return (
      <Card>
        <EmployeeForm {...this.props}/>

        <CardSection>
          <Button onPress={this.onPressButton.bind(this)}>Save</Button>
        </CardSection>
      </Card>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    name: state.employeeForm.name,
    phone: state.employeeForm.phone,
    shiftDay: state.employeeForm.shiftDay
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateEmployee: (empl) => dispatch(actions.createEmployee(empl))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeCreate);
