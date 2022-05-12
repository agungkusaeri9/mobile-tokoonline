import React from "react";
import {View,StyleSheet,Image,TouchableHighlight,Text,TextInput,Button} from 'react-native';
import Navbar from "../../components/Navbar";
import Topbar from "../../components/Topbar";

const PasswordBaru = () => {
    return (
        <View style={{padding: 10,minHeight:650}}>
        <Topbar page={"Buat Password Baru"}/>
        <View style={styles.boxWrapper}>
          <View>
            <Text style={styles.textInput}>Password Baru</Text>
            <TextInput style={styles.input} placeholder="Masukan Password Baru"></TextInput>
          </View>
          <View style={{marginTop:10}}>
            <Text style={styles.textInput}>Konfirmasi Password Baru</Text>
            <TextInput style={styles.input} placeholder="Masukan Konfirmasi Password Baru"></TextInput>
          </View>
          <View style={{marginTop: 10}}>
            <TouchableHighlight style={styles.button}>
              <Text style={{color:'white'}}>
                  UBAH PASSWORD
              </Text>
            </TouchableHighlight>
          </View>
          <View style={{marginTop:40}}>
            <Text style={{textAlign:'center',marginTop:5}}>Logout</Text>
          </View>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    boxWrapper: {
      minHeight: 200,
      borderWidth: 0.3,
      borderColor: '#A99393',
      marginTop: 180,
      borderRadius: 4,
      padding: 20,
    },
    textInput: {
      marginBottom: 10,
    },
    input: {
      borderWidth: 0.4,
      borderColor: 'black',
      height: 40,
      borderBottomColor: 'black',
      paddingHorizontal: 10,
      borderRadius: 10,
      fontSize: 14,
    },
    button: {
    alignItems:'center',
        padding:10,
      backgroundColor: '#E96E6E',
      borderRadius: 10,
    },
  });

export default PasswordBaru;