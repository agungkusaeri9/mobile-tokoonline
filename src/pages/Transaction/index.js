import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Topbar from '../../components/Topbar';
const Transaction = () => {
  return (
    <View>
      <Topbar page={'Riwayat Pesanan'} />
      <ScrollView>
        <View style={styles.wrapper}>
          <View>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{fontSize: 18, marginBottom: 5, fontWeight: '700'}}>
                Sabtu, 12 Mei 2022
              </Text>
              <Text style={{fontSize: 18, marginBottom: 5, fontWeight: '700'}}>
                  Detail
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginBottom: 10}}>
              <View style={{flex: 2}}>
                <Image
                  source={require('../../assets/image/jaket1.png')}
                  style={{height: 100, borderRadius: 8, width: 120}}
                />
              </View>
              <View style={{flex: 2, justifyContent: 'center'}}>
                <Text style={{fontSize: 18, fontWeight: '500'}}>
                  Baju Muslimah
                </Text>
                <Text style={{fontSize: 18, fontWeight: '600', marginTop: 2}}>
                  x 2
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    backgroundColor: 'green',
                    width: 60,
                    textAlign: 'center',
                    color: 'white',
                    fontWeight: '500',
                    marginTop: 2,
                    borderRadius: 10,
                    paddingVertical: 1,
                  }}>
                  Sukses
                </Text>
                <Text style={{fontSize: 16, fontWeight: '600', marginTop: 2}}>
                  Rp. 100,000
                </Text>
              </View>
              <View style={{justifyContent: 'flex-end'}}>
                <View style={{marginTop: 20}}>
                  <TouchableHighlight
                    style={{backgroundColor: '#E96E6E', borderRadius: 10}}>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: '600',
                        paddingHorizontal: 8,
                        paddingVertical: 3,
                        fontSize: 12,
                        textAlign: 'center',
                      }}>
                      Beli Lagi
                    </Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 2}}>
                <Image
                  source={require('../../assets/image/jaket1.png')}
                  style={{height: 100, borderRadius: 8, width: 120}}
                />
              </View>
              <View style={{flex: 2, justifyContent: 'center'}}>
                <Text style={{fontSize: 18, fontWeight: '500'}}>
                  Baju Muslimah
                </Text>
                <Text style={{fontSize: 18, fontWeight: '600', marginTop: 2}}>
                  x 2
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    backgroundColor: 'green',
                    width: 60,
                    textAlign: 'center',
                    color: 'white',
                    fontWeight: '500',
                    marginTop: 2,
                    borderRadius: 10,
                    paddingVertical: 1,
                  }}>
                  Sukses
                </Text>
                <Text style={{fontSize: 16, fontWeight: '600', marginTop: 2}}>
                  Rp. 100,000
                </Text>
              </View>
              <View style={{justifyContent: 'flex-end'}}>
                <View style={{marginTop: 20}}>
                  <TouchableHighlight
                    style={{backgroundColor: '#E96E6E', borderRadius: 10}}>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: '600',
                        paddingHorizontal: 8,
                        paddingVertical: 3,
                        fontSize: 12,
                        textAlign: 'center',
                      }}>
                      Beli Lagi
                    </Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: '#D3CCCC',
              borderBottomWidth: 0.4,
              marginVertical: 10,
            }}
          />
          <View>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{fontSize: 18, marginBottom: 5, fontWeight: '700'}}>
                Jum'at, 11 Mei 2022
              </Text>
              <Text style={{fontSize: 18, marginBottom: 5, fontWeight: '700'}}>
                  Detail
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginBottom: 10}}>
              <View style={{flex: 2}}>
                <Image
                  source={require('../../assets/image/jaket1.png')}
                  style={{height: 100, borderRadius: 8, width: 120}}
                />
              </View>
              <View style={{flex: 2, justifyContent: 'center'}}>
                <Text style={{fontSize: 18, fontWeight: '500'}}>
                  Baju Muslimah
                </Text>
                <Text style={{fontSize: 18, fontWeight: '600', marginTop: 2}}>
                  x 2
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    backgroundColor: 'green',
                    width: 60,
                    textAlign: 'center',
                    color: 'white',
                    fontWeight: '500',
                    marginTop: 2,
                    borderRadius: 10,
                    paddingVertical: 1,
                  }}>
                  Sukses
                </Text>
                <Text style={{fontSize: 16, fontWeight: '600', marginTop: 2}}>
                  Rp. 100,000
                </Text>
              </View>
              <View style={{justifyContent: 'flex-end'}}>
                <View style={{marginTop: 20}}>
                  <TouchableHighlight
                    style={{backgroundColor: '#E96E6E', borderRadius: 10}}>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: '600',
                        paddingHorizontal: 8,
                        paddingVertical: 3,
                        fontSize: 12,
                        textAlign: 'center',
                      }}>
                      Beli Lagi
                    </Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 2}}>
                <Image
                  source={require('../../assets/image/jaket1.png')}
                  style={{height: 100, borderRadius: 8, width: 120}}
                />
              </View>
              <View style={{flex: 2, justifyContent: 'center'}}>
                <Text style={{fontSize: 18, fontWeight: '500'}}>
                  Baju Muslimah
                </Text>
                <Text style={{fontSize: 18, fontWeight: '600', marginTop: 2}}>
                  x 2
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    backgroundColor: 'green',
                    width: 60,
                    textAlign: 'center',
                    color: 'white',
                    fontWeight: '500',
                    marginTop: 2,
                    borderRadius: 10,
                    paddingVertical: 1,
                  }}>
                  Sukses
                </Text>
                <Text style={{fontSize: 16, fontWeight: '600', marginTop: 2}}>
                  Rp. 100,000
                </Text>
              </View>
              <View style={{justifyContent: 'flex-end'}}>
                <View style={{marginTop: 20}}>
                  <TouchableHighlight
                    style={{backgroundColor: '#E96E6E', borderRadius: 10}}>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: '600',
                        paddingHorizontal: 8,
                        paddingVertical: 3,
                        fontSize: 12,
                        textAlign: 'center',
                      }}>
                      Beli Lagi
                    </Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: '#D3CCCC',
              borderBottomWidth: 0.4,
              marginVertical: 10,
            }}
          />
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
});

export default Transaction;
