import React, { Component} from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from '../components/common';
import * as actions from '../actions';

class LoginForm extends Component {

  renderLoginButton = () => {
    if(this.props.authenticating){
      return (
        <Spinner size="large"/>
      );
    }
    return (
      <Button onPress={() => this.props.onLoginUser(this.props.email, this.props.password)}>Log in</Button>
    );
  }

  renderError = () => {
    if(this.props.error){
      console.log(this.props.error);
      return (
        <View><Text style={styles.errorTextStyle}>{this.props.error.message}</Text></View>
      );
    }
    return null;
  }

  render(){
    return (
      <Card>
          <CardSection>
            <Input
              placeholder="user@gmail.com"
              label="Email"
              value={this.props.email}
              onChangeText={ (text) => this.props.onChangeEmail(text) }
            />
          </CardSection>
          <CardSection>
            <Input
              secureTextEntry
              label="Password"
              placeholder="password"
              value={this.props.password}
              onChangeText={ (text) => this.props.onChangePassword(text) }
            />
          </CardSection>
          {this.renderError()}
          <CardSection>
            {this.renderLoginButton()}
          </CardSection>
        </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 18,
    alignSelf: 'center',
    color: 'red'
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    authenticating: state.auth.authenticating,
    error: state.auth.error
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onChangeEmail: (email) => dispatch(actions.changeEmail(email) ),
    onChangePassword: (password) => dispatch(actions.changePassword(password)),
    onLoginUser: (email, password) => dispatch(actions.loginUser(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
