import React ,{ Component }from 'react';
import { AppRegistry,StyleSheet,View , Text } from 'react-native';

import firebase from 'firebase';
import { Card , CardSection } from './../components/common';
import { Actions } from 'react-native-router-flux';
import ButtonComponent from 'react-native-button-component';

import Icon from 'react-native-vector-icons/MaterialIcons';

const accountbox = (<Icon name="account-box" size={30} color="black" />);
const face = (<Icon name="face" size={30} color="black" />);
const email = (<Icon name="email" size={30} color="black" />);
const wc = (<Icon name="wc" size={30} color="black" />);
const contactmail = (<Icon name="contact-mail" size={30} color="black" />);

const deviceWidth = require('Dimensions').get('window').width;
const deviceHeight = require('Dimensions').get('window').height;

class User extends Component{

  logoutUser(){
    firebase.auth().signOut();
    Actions.auth();
  }

  render(){
    const { container, title, buttonStyle } = styles;
    return(
      <View style={styles.container}>
      <Card>
        <CardSection>
          <Text style= {styles.title}> User </Text>
        </CardSection>
      </Card>

      <Card>
        <CardSection>
          {face}
          <Text style= {styles.title}> Name: </Text>
        </CardSection>
        <CardSection>
          {email}
          <Text style= {styles.title}> Email: </Text>
        </CardSection>
        <CardSection>
          {wc}
          <Text style= {styles.title}> Gender: </Text>
        </CardSection>
        <CardSection>
          {contactmail}
          <Text style= {styles.title}> Address: </Text>
        </CardSection>
      </Card>

      <ButtonComponent
        type="primary"
        shape="rectangle"
        style={buttonStyle}
        onPress={this.logoutUser.bind(this)}
        text="Sign out" />
      </View>
    );
  }
}

const styles = {
  container: {
    flex:1,
    paddingTop:50,
    backgroundColor: '#CCCCFF',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  title: {
    fontSize: 18,
    color: 'black',
    padding: 5
  },
  buttonStyle: {
    backgroundColor: '#bfff00',
    height: 40,
    width: deviceWidth*0.7,
    borderRadius: 20,
    margin: 3
  },
}

export default User;
