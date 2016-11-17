import _ from 'lodash';
import React ,{ Component }from 'react';
import { AppRegistry,StyleSheet,View , Text ,ListView } from 'react-native';
import { Card , CardSection } from './../components/common';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

const deviceWidth = require('Dimensions').get('window').width;
const deviceHeight = require('Dimensions').get('window').height;

export default class Home extends Component{
  componentWillMount(){
    firebase.database().ref(`/Product`)
      .on('value', snapshot => { //create real time listener
      this.convertProduct(snapshot.val())
    });
  }

  convertProduct(snapshot) {
    const products = _.map(snapshot, (val, uid) => {
      return { ...val, uid };
    })

    this.createDataSource(products);
  }

  createDataSource({product}) {
    console.log(product);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(product);
  }

  renderRow(product) {
    return <ProductItem product={product} />;
  }

  render(){
    return(
      <View style={styles.container}>
        <ListView
          contentContainerStyle={styles.listViewContainer}
          enableEmptySections
          dataSource={this.dataSource} //data returned from firebase
          renderRow={this.renderRow} //how we design product item
        />
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
  listViewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
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
