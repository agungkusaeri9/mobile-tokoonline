import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import Topbar from '../../components/Topbar';
const Verification = () => {
  return (
    <View>
      <Topbar page={'Kode Verifikasi'} />
      <ScrollView>
        <View style={styles.wrapper}>
          <View style={{marginTop: 20}}>
            <View style={{marginTop: 20}}>
              <Text style={styles.textInput}>Email</Text>
              <TextInput
                style={styles.inputRead}
                value="agungkusaeri9@gmail.com" editable={false}></TextInput>
            </View>
             <View style={{marginTop: 20}}>
              <Text style={styles.textInput}>Kode Verifikasi</Text>
              <TextInput
                style={styles.input}
                placeholder="Masukan Kode Verifikasi"></TextInput>
            </View>
            <View style={{marginTop: 20}}>
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
                    textAlign: 'center',
                  }}>
                  Verifikasi Akun
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
export default Verification;
