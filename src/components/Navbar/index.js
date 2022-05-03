import React from 'react';
import {View,Image,StyleSheet} from 'react-native';

const Navbar = () => {
    return (
        <View style={styles.boxNavbar}>
          <View style={{paddingHorizontal:30,alignItems:'center',marginTop:10}}>
            <Image
              style={styles.icon}
              source={require("../../assets/icon/home.png")}
            ></Image>
          </View>
          <View style={{paddingHorizontal:30,alignItems:'center',marginTop:10}}>
            <Image
              style={styles.icon}
              source={require("../../assets/icon/reorder.png")}
            ></Image>
          </View>
          <View style={{paddingHorizontal:30,alignItems:'center',marginTop:10}}>
            <Image
              style={styles.icon}
              source={require("../../assets/icon/shopping_cart.png")}
            ></Image>
          </View>
          <View style={{paddingHorizontal:30,alignItems:'center',marginTop:10}}>
            <Image
              style={styles.icon}
              source={require("../../assets/icon/person.png")}
            ></Image>
          </View>
        </View>
      );
}
const styles = StyleSheet.create({
    boxNavbar: {
      height: 55,
      backgroundColor: "#eaeaea",
      position: "absolute",
      bottom: 0,
      right: 0,
      left: 0,
      flexDirection: "row",
      justifyContent:'space-between',
    }
  });

export default Navbar;