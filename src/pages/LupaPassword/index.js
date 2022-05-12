import React from "react";
import {View,StyleSheet,Image,TouchableHighlight,Text,TextInput,Button} from 'react-native';
import Navbar from "../../components/Navbar";
import Topbar from "../../components/Topbar";

const LupaPassword = () => {
    return (
        <View style={{padding: 10,minHeight:650}}>
        <Topbar page={"Lupa Password"}/>
        <View style={styles.boxWrapper}>
          <View>
            <Text style={styles.textInput}>Email</Text>
            <TextInput style={styles.input} placeholder="Masukan Email Anda"></TextInput>
          </View>
          <View style={{marginTop: 10}}>
            <TouchableHighlight style={styles.button}>
              <Text style={{color:'white'}}>
                  MINTA KODE VERIFIKASI
              </Text>
            </TouchableHighlight>
          </View>
          <View style={{marginTop:40}}>
            <Text style={{textAlign:'center',marginTop:15}}>Belum Menerima Kode Konfirmasi? Minta Lagi</Text>
            <Text style={{textAlign:'center',marginTop:5}}>Sudah punya akun? Login</Text>
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
      marginTop: 120,
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

export default LupaPassword;