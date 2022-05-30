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
        fontSize: 16,marginTop:10, fontWeight: '400'
    },
    productImage: {
        maxHeight: 160, maxWidth: 150,borderRadius:10
    },
    productName: {
        fontSize: 16, fontWeight: '500', marginTop: 12
    }
})

export default Product;
