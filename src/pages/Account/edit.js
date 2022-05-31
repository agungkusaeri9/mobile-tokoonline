import React from 'react';
import {View, StyleSheet, ScrollView, Text, TextInput,TouchableHighlight} from 'react-native';
import Topbar from '../../components/Topbar';
const AccountEdit = () => {
  return (
    <View>
      <Topbar page={'Edit Profile'} />
      <ScrollView>
        <View style={styles.wrapper}>
          <View style={{marginTop:20}}>
            <View style={{marginVertical:5}}>
              <Text style={styles.textInput}>Nama</Text>
              <TextInput style={styles.input} value="Agung Kusaeri"></TextInput>
            </View>
            <View style={{marginVertical:5}}>
              <Text style={styles.textInput}>Username</Text>
              <TextInput editable = {false} style={styles.inputRead} value="agungkusaeri9"></TextInput>
            </View>
            <View style={{marginVertical:5}}>
              <Text style={styles.textInput}>Email</Text>
              <TextInput editable = {false} style={styles.inputRead} value="agungkusaeri9@gmail.com"></TextInput>
            </View>
            <View style={{marginVertical:5}}>
              <Text style={styles.textInput}>Foto</Text>
              <View style={{backgroundColor:'white',paddingVertical:10,paddingHorizontal:15,borderRadius:15,flexDirection:'row'}}>
                  <View style={{flex:1}}>
                    <Text style={{backgroundColor:'#746E6E',textAlign:'center',paddingVertical:4,borderRadius:5}}>Choose Pile</Text>
                  </View>
                  <View style={{flex:3,paddingLeft:10,justifyContent:'center'}}>
                    <Text>
                        No File Choosen
                    </Text>
                  </View>
              </View>
            </View>
            <View style={{marginTop:20}}>
            <TouchableHighlight
              style={{backgroundColor: '#E96E6E', borderRadius: 15}}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: '600',
                  paddingHorizontal: 8,
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  fontSize: 18,
                  textAlign:'center'
                }}>
                Simpan
              </Text>
            </TouchableHighlight>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 0,
    marginTop: 10,
    marginHorizontal: 18,
    marginBottom: 150,
  },
  textInput: {
    marginBottom: 10,
    fontSize: 18,
  },
  input: {
    borderWidth: 0.4,
    borderColor: 'black',
    height: 40,
    borderBottomColor: 'black',
    paddingHorizontal: 10,
    borderRadius: 15,
    fontSize: 16,
    backgroundColor: 'white',
  },
  inputRead: {
    borderWidth: 0.4,
    borderColor: 'black',
    height: 40,
    borderBottomColor: 'black',
    paddingHorizontal: 10,
    borderRadius: 15,
    fontSize: 16,
    backgroundColor: '#DFDFDF',
  },
});
export default AccountEdit;
