import React, { Component } from 'react';
import {
  Alert,
  View,
  Text,
} from 'react-native';

import firebase from 'firebase';
import {
  Header,
  Button,
  Card,
  CardSection,
  Spinner,
  Input
} from './../components/common';

import ButtonComponent,{ RectangleButton } from 'react-native-button-component';
import { Actions } from 'react-native-router-flux';

const deviceWidth = require('Dimensions').get('window').width;
const deviceHeight = require('Dimensions').get('window').height;

class Register extends Component{

  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name:'',
      email: '',
      password: '',
      address:'',
      telNo:'',
      buttonState: 'signUp'
    }

    this.buttonStates = {
      signUp: {
        text: 'SIGN UP',
        onPress: () => {
          this.registerUser();
        },
      },
      loading: {
        spinner: true,
        text: 'SIGNING USER UP'
      }
    };
  }

 registerUser(){
   const { email,password } = this.state;
   if (email === '' || password === '') {
     Alert.alert('Error', 'Please make sure you have all the fields filled in')
   } else {
     this.setState({ buttonState: 'loading' })
     firebase.auth().createUserWithEmailAndPassword(email, password)
       .then(user => {
         this.setState({ buttonState: 'signUp' })
         Actions.main({type:'reset'})
       })
       .catch((error) => {
         this.setState({ buttonState: 'signUp' })
         Alert.alert('Error', error.message)
       });
   }
 }


  render(){
    const { textStyle,container, upperContainer, middleContainer, bottomContainer,
      skeleton, centerEverything, buttonContainer, buttonStyle, labelStyle} = styles;
    return(
      <View style={[container]}>
        <Header headerText="EXQUISITE" />
        <View style={[container]}>
          <View style={[centerEverything, upperContainer]}>
              <Text style={textStyle}>SIGN UP</Text>
          </View>

          <View style={[centerEverything, middleContainer]}>
            <View style={[buttonContainer]}>
              <Text style={labelStyle}>Email</Text>
              <Input
                placeholder="Email"
                onChangeText ={(email) => this.setState({email})}
                value={this.state.email} />
            </View>
            <View style={buttonContainer}>
              <Text style={labelStyle}>Password</Text>
              <Input
                placeholder="Password"
                onChangeText ={(password) => this.setState({password})}
                value={this.state.password}
                secureTextEntry />
            </View>
            <View style={[buttonContainer]}>
              <Text style={labelStyle}>First Name</Text>
              <Input
                placeholder="First Name"
                onChangeText={(first_name) => this.setState({first_name})}
                value={this.state.first_name} />
            </View>
          </View>

          <View style={[centerEverything, bottomContainer]}>
            <ButtonComponent
              type="primary"
              shape="rectangle"
              style={buttonStyle}
              buttonState={this.state.buttonState}
              states={this.buttonStates}
            />

            <ButtonComponent
              type="primary"
              shape="rectangle"
              style={buttonStyle}
              onPress={() =>Actions.pop()}
              text="GO BACK"
            />
          </View>
        </View>
      </View>
    )
  }
}

const styles = {
  centerEverything: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  skeleton: {
    borderWidth: 1,
    borderColor: 'blue'
  },
  container: {
    flex: 1,
  },
  upperContainer: {
    flex: 3
  },
  middleContainer: {
    flex: 4
  },
  bottomContainer: {
    flex: 3
  },
  buttonContainer: {
    flexDirection: 'column',
    paddingBottom: 5
  },
  buttonStyle: {
    backgroundColor: '#bfff00',
    height: 40,
    width: deviceWidth*0.7,
    borderRadius: 20,
    margin: 3
  },
  textStyle:{
    fontSize: 25,
  },
  labelStyle: {
    fontSize: 18
  }
}

export default Register;
