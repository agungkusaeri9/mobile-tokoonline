import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import Topbar from '../../components/Topbar';

const AccountDetail = () => {
  return (
    <View>
      <Topbar page={'Profile Saya'} />
      <ScrollView>
        <View style={styles.wrapper}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../../assets/image/user-profile.png')}
              style={{
                height: 80,
                width: 80,
                borderRadius: 50
              }}
            />
            <Text style={{fontSize: 22, fontWeight: '700', marginTop: 15}}>
              Agung Kusaeri
            </Text>
          </View>
          <View
            style={{
              borderBottomColor: '#D3CCCC',
              borderBottomWidth: 0.4,
              marginVertical: 25,
            }}></View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 16, fontWeight: '700', flex: 1}}>Nama</Text>
            <Text style={{fontSize: 16, fontWeight: '600', flex: 2}}>
              Agung Kusaeri
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <Text style={{fontSize: 16, fontWeight: '700', flex: 1}}>
              Username
            </Text>
            <Text style={{fontSize: 16, fontWeight: '600', flex: 2}}>
              agungkusaeri9
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <Text style={{fontSize: 16, fontWeight: '700', flex: 1}}>
              Email
            </Text>
            <Text style={{fontSize: 16, fontWeight: '600', flex: 2}}>
              agungkusaeri@gmail.com
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <Text style={{fontSize: 16, fontWeight: '700', flex: 1}}>
              Jenis Kelamin
            </Text>
            <Text style={{fontSize: 16, fontWeight: '600', flex: 2}}>
              laki-laki
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <Text style={{fontSize: 16, fontWeight: '700', flex: 1}}>
              Tanggal Lahir
            </Text>
            <Text style={{fontSize: 16, fontWeight: '600', flex: 2}}>
              20-12-2000
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <Text style={{fontSize: 16, fontWeight: '700', flex: 1}}>
              Nomor Hp
            </Text>
            <Text style={{fontSize: 16, fontWeight: '600', flex: 2}}>
              081912312421
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <Text style={{fontSize: 16, fontWeight: '700', flex: 1}}>
              Alamat
            </Text>
            <Text style={{fontSize: 16, fontWeight: '600', flex: 2}}>
              Kp. Citeko Kaler RT 07/03 Ds. Citeko Kaler, Kec. Plered, Kab.
              Purwakarta, Jawa Barat 41162
            </Text>
          </View>
          <View
            style={{
              borderBottomColor: '#D3CCCC',
              borderBottomWidth: 0.4,
              marginVertical: 25,
            }}></View>
          <View style={{alignItems: 'flex-end',marginBottom:30}}>
            <TouchableHighlight
              style={{backgroundColor: '#E96E6E', borderRadius: 10}}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: '600',
                  paddingHorizontal: 8,
                  paddingVertical: 4,
                  paddingHorizontal: 20,
                  fontSize: 18
                }}>
                Edit
              </Text>
            </TouchableHighlight>
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
});

export default AccountDetail;
