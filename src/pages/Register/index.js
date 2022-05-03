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
          <View style={{padding: 30}}>
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
              <Text style={{fontSize: 28, textAlign: 'center', marginTop: 0}}>
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
                <TouchableHighlight>
                  <Button
                    color="#09345C"
                    style={styles.button}
                    title="Register"></Button>
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
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  boxLogin: {
    height: 480,
    borderWidth: 0.3,
    borderColor: '#A99393',
    marginTop: 40,
    borderRadius: 4,
    padding: 20,
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
  },
});
export default Register;
