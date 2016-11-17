import React ,{ Component }from 'react';
import { AppRegistry,StyleSheet,View , Text } from 'react-native';

class ProductItem extends Component {

  render(){
    console.log(this.props.product);
    return(
      <View>
        <Text>konyee is so cacat but i love her so much</Text>
      </View>
    );
  }
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18,
  },
  thumbnailStyle: {
    width: 50,
    height: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
}

export default ProductItem;
