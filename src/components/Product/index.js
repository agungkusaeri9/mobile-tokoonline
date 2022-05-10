import React from 'react';
import {View,Image,Text,StyleSheet} from 'react-native';

const Product = props => {
    return (
      <View style={{maxWidth: 160, marginRight: 10}}>
        <Image style={styles.productImage} source={props.image} />
        <Text style={styles.productName}>
          {props.name}
        </Text>
        <Text style={styles.productPrice}>Rp. {props.price}</Text>
      </View>
    );
  };

const styles = StyleSheet.create({
    productPrice: {
        fontSize: 12,marginTop:10, fontWeight: '500'
    },
    productImage: {
        maxHeight: 160, width: 150,borderRadius:10
    },
    productName: {
        fontSize: 18, fontWeight: '600', marginTop: 12
    }
})

export default Product;
