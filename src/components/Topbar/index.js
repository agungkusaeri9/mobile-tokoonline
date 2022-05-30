import React from 'react';
import {View, Text, Image, StyleSheet, TouchableHighlight} from 'react-native';
const Topbar = (props) => {
  return (
    <View style={styles.topbar}>
      <View
        style={{flexDirection: 'row', justifyContent: 'center', padding: 15}}>
        <View style={{flex: 2}}>
          <TouchableHighlight>
            <Image source={require('../../assets/icon/back.png')}></Image>
          </TouchableHighlight>
        </View>
        <Text style={styles.pageName}>{props.page}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    topbar:{
        elevation:2,
        backgroundColor:'white'
    },  
  pageName: {
    fontSize: 20,
    flex: 8,
    alignSelf: 'center',
  },
});
export default Topbar;
