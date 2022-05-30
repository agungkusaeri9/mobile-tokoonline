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
import Navbar from '../../components/Navbar';

class Login extends Component {
  render() {
    return (
      <View style={styles.boxLogin}>
        <View style={{textAlign: 'center'}}>
          <Text
            style={{
              fontSize: 28,
              textAlign: 'center',
              marginTop: 30,
              fontWeight: '600',
            }}>
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
            <TouchableHighlight style={styles.button}>
              <Text style={styles.txtButton}>LOGIN</Text>
            </TouchableHighlight>
          </View>
          <View>
            <Text style={{textAlign: 'center', marginTop: 15}}>
              Belum Punya Akun? Register
            </Text>
            <Text style={{textAlign: 'center', marginTop: 5}}>
              Lupa Password?
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  boxLogin: {
    height: 300,
    borderColor: '#A99393',
    marginTop: 40,
    borderRadius: 4,
    paddingHorizontal: 18,
    flex: 1,
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
  },
});
export default Login;
