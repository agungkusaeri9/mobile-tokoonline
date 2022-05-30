import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableHighlight,
  Button,
  ScrollView,
} from 'react-native';

class Register extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          <View style={styles.boxLogin}>
            <View style={{textAlign: 'center'}}>
              <Text style={{fontSize: 28, textAlign: 'center', marginTop: 10,fontWeight:'600'}}>
                Register
              </Text>
            </View>
            <View style={styles.boxLogin}>
            <View>
                <Text style={styles.textInput}>Nama</Text>
                <TextInput style={styles.input} placeholder="Nama"></TextInput>
              </View>
              <View style={{marginTop: 20}}>
                <Text style={styles.textInput}>Email</Text>
                <TextInput style={styles.input} placeholder="Email"></TextInput>
              </View>
              <View style={{marginTop: 20}}>
                <Text style={styles.textInput}>Password</Text>
                <TextInput
                  secureTextEntry={true}
                  style={styles.input}
                  placeholder="Password"></TextInput>
              </View>
              <View style={{marginTop: 20}}>
                <Text style={styles.textInput}>Konfirmasi Password</Text>
                <TextInput
                  secureTextEntry={true}
                  style={styles.input}
                  placeholder="Konfirmasi Password"></TextInput>
              </View>
              <View style={{marginTop: 20}}>
                <TouchableHighlight style={styles.button}>
                  <Text style={styles.txtButton}>REGISTER</Text>
                </TouchableHighlight>
              </View>
              <View>
                <Text style={{textAlign: 'center', marginTop: 15}}>
                  Sudah Punya Akun? Login
                </Text>
                <Text style={{textAlign: 'center', marginTop: 5}}>
                  Lupa Password?
                </Text>
              </View>
            </View>
          </View>
          {/* <View>
            <View
              style={{
                textAlign: 'center',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Image source={require('../../assets/image/Logo.png')}></Image>
              <Text style={{fontSize: 24}}>My App</Text>
            </View>
            <View style={{textAlign: 'center'}}>
              <Text style={{fontSize: 24, textAlign: 'center', marginTop: 30}}>
                Register
              </Text>
            </View>
            <View style={styles.boxLogin}>
              <View>
                <Text style={styles.textInput}>Nama</Text>
                <TextInput style={styles.input} placeholder="Nama"></TextInput>
              </View>
              <View style={{marginTop: 20}}>
                <Text style={styles.textInput}>Email</Text>
                <TextInput style={styles.input} placeholder="Email"></TextInput>
              </View>
              <View style={{marginTop: 20}}>
                <Text style={styles.textInput}>Password</Text>
                <TextInput
                  secureTextEntry={true}
                  style={styles.input}
                  placeholder="Password"></TextInput>
              </View>
              <View style={{marginTop: 20}}>
                <Text style={styles.textInput}>Konfirmasi Password</Text>
                <TextInput
                  secureTextEntry={true}
                  style={styles.input}
                  placeholder="Konfirmasi Password"></TextInput>
              </View>
              <View style={{marginTop: 20}}>
                <TouchableHighlight style={styles.button}>
                  <Text style={styles.txtButton}>REGISTER</Text>
                </TouchableHighlight>
              </View>
              <View>
                <Text style={{textAlign: 'center', marginTop: 15}}>
                  Sudah Punya Akun? Login
                </Text>
                <Text style={{textAlign: 'center', marginTop: 5}}>
                  Lupa Password?
                </Text>
              </View>
            </View>
          </View> */}
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  boxLogin: {
    borderColor: '#A99393',
    marginTop: 40,
    borderRadius: 4,
    paddingHorizontal: 18,
    flex: 1,
    marginBottom:40
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
    borderRadius: 15,
    fontSize: 14,
  },
  button: {
    height: 41,
    backgroundColor: '#09345C',
    borderRadius: 10,
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtButton: {
    color: 'white',
    fontSize: 14,
  }
});
export default Register;
