import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { Card, CardSection, Button, Confirm } from './common';
import * as actions from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {

  state = {
    modalVisible: false
  }

  componentWillMount(){
    this.props.onInitForm(this.props.employee);
  }

  onPressButton(){
    const { name, phone, shiftDay } = this.props;

    this.props.onEditEmployee({ uid: this.props.employee.uid, name, phone, shiftDay });
  }

  onPressText = () => {
    const { phone, shiftDay } = this.props;
    Communications.text(phone, `Your upcoming shift is on ${shiftDay}`);
  }

  onPressFire = () => {
    this.setState({ modalVisible: true });
  }

  onCanceledFire = () => {
    this.setState({ modalVisible: false });
  }


  render(){

    return (
      <Card>
        <EmployeeForm {...this.props}/>

        <CardSection>
          <Button onPress={this.onPressButton.bind(this)}>Save changes</Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onPressText}>Text Schedule</Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onPressFire}>Fire Employee</Button>
        </CardSection>

        <Confirm
          modalVisible={this.state.modalVisible}
          onPressYes={() => this.props.onFireEmployee(this.props.employee.uid)}
          onPressNo={this.onCanceledFire}>Are you sure you want to fire this employee?</Confirm>
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
    onEditEmployee: (empl) => dispatch(actions.editEmployee(empl)),
    onFireEmployee: (uid) => dispatch(actions.fireEmployee(uid))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeEdit);
