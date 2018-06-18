import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ListItem from './ListItem';


class EmployeeList extends Component {

  componentDidMount(){
    this.props.onFetchEmployees();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps){
    this.createDataSource(nextProps);
  }

  createDataSource = ({ employees }) => {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1,r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow = (employee) => {
    return <ListItem employee={employee} />
  }

  render(){
    console.log(this.props.employees);
    if(this.props.employees.length > 0){
      return (
        <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
      );
    }
    return (
      <View>
        <Text>
          No employees
        </Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  let employees = [];
  if(Object.keys(state.employees).length > 0){
    employees = Object.entries(state.employees).map( ([ key, value ]) => {
      return {
        uid: key,
        ...value
      }
    });
  }
  return {
    employees: employees
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchEmployees: () => dispatch(actions.fetchEmployees())
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
