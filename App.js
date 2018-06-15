import React, { Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';

export default class App extends Component {

  componentWillMount(){
    const config = {
      apiKey: "AIzaSyBwGAuAioBRovS_H9ErqXIOCDlcgFHgKRs",
      authDomain: "manager-935d0.firebaseapp.com",
      databaseURL: "https://manager-935d0.firebaseio.com",
      projectId: "manager-935d0",
      storageBucket: "",
      messagingSenderId: "693889885154"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={ createStore(reducers) }>
        <LoginForm />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
