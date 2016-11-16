import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
} from 'react-native';

const deviceWidth = require('Dimensions').get('window').width;
const deviceHeight = require('Dimensions').get('window').height;

const Input = ({ label, placeholder, secureTextEntry, onChangeText, value }) => {

  return(
    <TextInput
      style={styles.inputStyle}
      value={value}
      onChangeText={onChangeText}
      autoCapilalize={'none'}
      autoCorrect={false}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  );
}

const styles = {
  inputStyle: {
    height: 40,
    width: deviceWidth*0.7,
    borderColor: '#e60073',
    borderWidth:1,
    borderRadius:9,
    fontSize:14,
    paddingLeft: 20,
  },
}

export {Input};
