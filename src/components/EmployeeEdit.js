import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Button } from './common';
import { connect } from 'react-redux';
import * as actions from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {

  componentWillMount(){
    this.props.onInitForm(this.props.employee);
  }

  onPressButton(){
    const { name, phone, shiftDay } = this.props;

    this.props.onEditEmployee({ uid: this.props.employee.uid, name, phone, shiftDay });
  }

  render(){

    return (
      <Card>
        <EmployeeForm {...this.props}/>

        <CardSection>
          <Button onPress={this.onPressButton.bind(this)}>Save changes</Button>
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
    onInitForm: (empl) => dispatch(actions.initEditForm(empl)),
    onEditEmployee: (empl) => dispatch(actions.editEmployee(empl))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeEdit);
