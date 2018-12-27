import React,{ Component } from 'react';
import { View , Text } from 'react-native';
import firebase from '@firebase/app'
import '@firebase/auth'
import { Header, Button, Spinner, CardSection } from './component/common'
import LoginForm from './component/LoginForm';


class App extends Component {

  state = { loggedIn: null };

  componentWillMount(){
     firebase.initializeApp({
        apiKey: 'AIzaSyBgRTUejhfX8B58XbyCsfOkICLIiRMLrRE',
        authDomain: 'authentication-eb11b.firebaseapp.com',
        databaseURL: 'https://authentication-eb11b.firebaseio.com',
        projectId: 'authentication-eb11b',
        storageBucket: 'authentication-eb11b.appspot.com',
        messagingSenderId: '943590187524'
     });
     firebase.auth().onAuthStateChanged((user) =>{
        if (user) {
          this.setState({ loggedIn : true })
        } else {
          this.setState({ loggedIn : false })
        }
     });
  }

  renderContent(){
    switch(this.state.loggedIn){
      case true:
          return(
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>
                Log Out
              </Button>
            </CardSection>
          );
        break;
      case false:
          return <LoginForm />;
        break;
      default:
          return <Spinner size="large"/>;
        break;
    }
  }

  render(){
    return(
        <View>
          <Header headerText="Authentication"/>
          <View style={styles.styleContainer}>
              {this.renderContent()}
          </View>
        </View>
    );
  };
}

const styles={
  styleContainer:{
    marginTop:60
  }
};

export default App;
