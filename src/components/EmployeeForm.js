import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
import * as actions from '../actions';

class EmployeeForm extends Component {

  render(){
    console.log(`shift: ${this.props.shiftDay}`);

    return (
      <Card>
        <CardSection>
          <Input
            placeholder="John Doe"
            label="Name"
            value={this.props.name}
            onChangeText={ (text) => this.props.onChangeField({ prop: 'name', value: text }) }
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="555 55 55"
            value={this.props.phone}
            onChangeText={ (text) => this.props.onChangeField({ prop: 'phone', value: text }) }
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column', height: 80 }}>
          <Text style={styles.pickerTextStyle}>Select a shift</Text>
          <Picker style={{ flex: 1 }} selectedValue={this.props.shiftDay} onValueChange={ (shiftDay) => this.props.onChangeField({ prop: 'shiftDay', value: shiftDay }) }>
            { days.map( (day, index) => <Picker.Item key={index} label={day} value={day} /> ) }
          </Picker>
        </CardSection>

        <CardSection>
          <Button>Save</Button>
        </CardSection>
      </Card>
    );
  }
}

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = (state) => {
  return {
    name: state.employeeForm.name,
    phone: state.employeeForm.phone,
    shiftDay: state.employeeForm.shiftDay
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeField: (text) => dispatch(actions.updateEmployee(text))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeForm);
