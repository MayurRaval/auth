import React,{ Component } from 'react';
import { View , Text } from 'react-native';
import firebase from '@firebase/app'
import '@firebase/auth'
import { Header } from './component/common'
import LoginForm from './component/LoginForm';
class App extends Component {

  componentWillMount(){
     firebase.initializeApp({
        apiKey: 'AIzaSyBgRTUejhfX8B58XbyCsfOkICLIiRMLrRE',
        authDomain: 'authentication-eb11b.firebaseapp.com',
        databaseURL: 'https://authentication-eb11b.firebaseio.com',
        projectId: 'authentication-eb11b',
        storageBucket: 'authentication-eb11b.appspot.com',
        messagingSenderId: '943590187524'
     });
  }

  render(){
    return(
        <View>
          <Header headerText="Authentication"/>
          <LoginForm/>
        </View>
    );
  };
}

export default App;
