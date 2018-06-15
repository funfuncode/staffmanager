import React, { Component} from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from '../components/common';

class LoginForm extends Component {

  render(){
    return (
      <Card>
          <CardSection>
            <Input
              placeholder="user@gmail.com"
              label="Email"
            />
          </CardSection>
          <CardSection>
            <Input
              secureTextEntry
              label="Password"
              placeholder="password"
            />
          </CardSection>

          <CardSection>
            <Button>Log in</Button>
          </CardSection>
        </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  }
}


const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
