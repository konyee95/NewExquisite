import React,{ Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';

import { Card , CardSection } from './../components/common';

class ProductList extends Component{

  render(){
    const{title,shopName,productImage}=product;
    const{headerContentStyle,headerTextStyle,thumbnailStyle,thumbnailContainerStyle,imageStyle}=styles

    return(
      <Card>
        <CardSection>
          <View style = thumbnailContainerStyle>
            <Image
              source={{uri:productImage}}
              style={thumbnailStyle}/>
          </View>
          
        </CardSection>
      </Card>
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
export default ProductList;
