import React ,{ Component }from 'react';
import { AppRegistry,StyleSheet,View , Text } from 'react-native';
import { Card , CardSection } from './../components/common';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

const deviceWidth = require('Dimensions').get('window').width;
const deviceHeight = require('Dimensions').get('window').height;

export default class Home extends Component{
  componentWillMount(){
    firebase.database().ref(`/Product`)
      .on('value', snapshot => { //create real time listener
      console.log(snapshot.val())
        });
  }

  render(){
    return(
      <View style={styles.container}>
        <Card>
          <CardSection>
            <Text style= {styles.title}> Advertisement </Text>
          </CardSection>
        </Card>

        <Card>
          <CardSection>
            <Text style= {styles.title}> Product  </Text>
          </CardSection>
        </Card>

      </View>
    );
  }
}

const styles = {
  container: {
    flex:1,
    paddingTop:50,
    backgroundColor: '#ffbf80',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  title: {
    fontSize: 18,
    color: 'black',
    padding: 5
  },
  buttonStyle: {
    backgroundColor: '#ff6600',
    height: 40,
    width: deviceWidth*0.7,
    borderRadius: 20,
    margin: 3
  },
}
