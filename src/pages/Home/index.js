import React from 'react';
import {View, Text, ScrollView, Image, TextInput} from 'react-native';

const Home = () => {
  return (
    <View style={{backgroundColor: '#FDF0F3'}}>
      <ScrollView>
        <View style={{padding: 20}}>
          <View style={{minHeight: 700}}>
            <View
              style={{
                backgroundColor: '#ffff',
                borderRadius: 50,
                width: 48,
                height: 48,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={require('../../assets/icon/apps.png')} />
            </View>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 28,
                fontWeight: '600',
                marginTop: 10,
              }}>
              Sesuaikan Gaya Anda
            </Text>
            <View style={{marginTop: 30}}>
              <TextInput
                style={{
                  height: 48,
                  borderWidth: 0.4,
                  borderRadius: 12,
                  fontSize: 18,
                  backgroundColor: 'white',
                  borderColor: 'white',
                  paddingHorizontal: 10,
                }}
                placeholder="Search"></TextInput>
            </View>
            <View style={{flexDirection: 'column'}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 20,
                }}>
                <View>
                  <Image
                    style={{flex: 1}}
                    source={require('../../assets/image/jaket1.png')}
                  />
                  <Text
                    style={{fontSize: 23, fontWeight: '600', marginTop: 10}}>
                    Jaket Jeans
                  </Text>
                  <Text style={{fontSize: 20, fontWeight: '500'}}>
                    Rp. 25,000
                  </Text>
                </View>
                <View>
                  <Image
                    style={{flex: 1}}
                    source={require('../../assets/image/kemeja.png')}
                  />
                  <Text
                    style={{fontSize: 23, fontWeight: '600', marginTop: 10}}>
                    Baju Kemeja
                  </Text>
                  <Text style={{fontSize: 20, fontWeight: '500'}}>
                    Rp. 125,000
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 20,
                }}>
                <View>
                  <Image
                    style={{flex: 1}}
                    source={require('../../assets/image/jaket1.png')}
                  />
                  <Text
                    style={{fontSize: 23, fontWeight: '600', marginTop: 10}}>
                    Jaket Jeans
                  </Text>
                  <Text style={{fontSize: 20, fontWeight: '500'}}>
                    Rp. 25,000
                  </Text>
                </View>
                <View>
                  <Image
                    style={{flex: 1}}
                    source={require('../../assets/image/kemeja.png')}
                  />
                  <Text
                    style={{fontSize: 23, fontWeight: '600', marginTop: 10}}>
                    Baju Kemeja
                  </Text>
                  <Text style={{fontSize: 20, fontWeight: '500'}}>
                    Rp. 125,000
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 20,
                }}>
                <View>
                  <Image
                    style={{flex: 1}}
                    source={require('../../assets/image/jaket1.png')}
                  />
                  <Text
                    style={{fontSize: 23, fontWeight: '600', marginTop: 10}}>
                    Jaket Jeans
                  </Text>
                  <Text style={{fontSize: 20, fontWeight: '500'}}>
                    Rp. 25,000
                  </Text>
                </View>
                <View>
                  <Image
                    style={{flex: 1}}
                    source={require('../../assets/image/kemeja.png')}
                  />
                  <Text
                    style={{fontSize: 23, fontWeight: '600', marginTop: 10}}>
                    Baju Kemeja
                  </Text>
                  <Text style={{fontSize: 20, fontWeight: '500'}}>
                    Rp. 125,000
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default Home;
