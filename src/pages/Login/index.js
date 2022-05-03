import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableHighlight,
  Button,
} from 'react-native';

class Login extends Component {
  render() {
    return (
      <View style={{padding: 30,minHeight:650}}>
        <View
          style={{textAlign: 'center', alignItems: 'center', marginTop: 20}}>
          <Image source={require('../../assets/image/Logo.png')}></Image>
          <Text style={{fontSize: 24}}>My App</Text>
        </View>
        <View style={{textAlign: 'center'}}>
          <Text style={{fontSize: 24, textAlign: 'center', marginTop: 30}}>
            Login
          </Text>
        </View>
        <View style={styles.boxLogin}>
          <View>
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
            <TouchableHighlight>
              <Button
                color="#09345C"
                style={styles.button}
                title="Login"></Button>
            </TouchableHighlight>
          </View>
          <View>
            <Text style={{textAlign:'center',marginTop:15}}>Belum Punya Akun? Register</Text>
            <Text style={{textAlign:'center',marginTop:5}}>Lupa Password?</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  boxLogin: {
    height: 300,
    borderWidth: 0.3,
    borderColor: '#A99393',
    marginTop: 40,
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
    borderRadius: 15,
    fontSize: 14,
  },
  button: {
    height: 41,
    backgroundColor: '#09345C',
    borderRadius: 10,
  },
});
export default Login;
