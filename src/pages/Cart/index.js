import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import RNPickerSelect from "react-native-picker-select";
import Topbar from '../../components/Topbar';
const Cart = () => {
  return (
    <View>
      <Topbar page={'Keranjang Saya'} />
      <ScrollView>
        <View style={styles.wrapper}>
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
              <Text style={{fontSize: 16, fontWeight: '600', marginTop: 10}}>
                Rp. 100,000
              </Text>
              <Text style={{fontSize: 18, fontWeight: '600', marginTop: 10}}>
                x 2
              </Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <TouchableHighlight>
                <Image source={require('../../assets/icon/delete.png')} style={{height:30}} />
              </TouchableHighlight>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: '#D3CCCC',
              borderBottomWidth: 0.4,
              marginVertical: 10,
            }}
          />
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
              <Text style={{fontSize: 16, fontWeight: '600', marginTop: 10}}>
                Rp. 100,000
              </Text>
              <Text style={{fontSize: 18, fontWeight: '600', marginTop: 10}}>
                x 2
              </Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <TouchableHighlight>
                <Image source={require('../../assets/icon/delete.png')} style={{height:30}} />
              </TouchableHighlight>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: '#D3CCCC',
              borderBottomWidth: 0.4,
              marginVertical: 10,
            }}
          />
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
              <Text style={{fontSize: 16, fontWeight: '600', marginTop: 10}}>
                Rp. 100,000
              </Text>
              <Text style={{fontSize: 18, fontWeight: '600', marginTop: 10}}>
                x 2
              </Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <TouchableHighlight>
                <Image source={require('../../assets/icon/delete.png')} style={{height:30}} />
              </TouchableHighlight>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: '#D3CCCC',
              borderBottomWidth: 0.4,
              marginVertical: 10,
            }}
          />
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
              <Text style={{fontSize: 16, fontWeight: '600', marginTop: 10}}>
                Rp. 100,000
              </Text>
              <Text style={{fontSize: 18, fontWeight: '600', marginTop: 10}}>
                x 2
              </Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <TouchableHighlight>
                <Image source={require('../../assets/icon/delete.png')} style={{height:30}} />
              </TouchableHighlight>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: '#D3CCCC',
              borderBottomWidth: 0.4,
              marginVertical: 10,
            }}
          />
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
              <Text style={{fontSize: 16, fontWeight: '600', marginTop: 10}}>
                Rp. 100,000
              </Text>
              <Text style={{fontSize: 18, fontWeight: '600', marginTop: 10}}>
                x 2
              </Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <TouchableHighlight>
                <Image source={require('../../assets/icon/delete.png')} style={{height:30}} />
              </TouchableHighlight>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: '#D3CCCC',
              borderBottomWidth: 0.4,
              marginVertical: 10,
            }}
          />
          {/* form checkout */}
          <View style={{marginTop:10}}>
            <View>
                <Text style={styles.formLabel}>Nama Lengkap</Text>
                <TextInput placeholder='Masukan Nama Lengkap' style={styles.formInput}></TextInput>
            </View>
            <View style={{marginTop:10}}>
                <Text style={styles.formLabel}>Email</Text>
                <TextInput placeholder='Masukan Email' style={styles.formInput}></TextInput>
            </View>
            <View style={{marginTop:10}}>
                <Text style={styles.formLabel}>Provinsi</Text>
                <TextInput placeholder='Pilih Provinsi' style={styles.formInput}></TextInput>
            </View>
            <View style={{marginTop:10}}>
                <Text style={styles.formLabel}>Kota</Text>
                <TextInput placeholder='Pilih Kota' style={styles.formInput}></TextInput>
            </View>
            <View style={{marginTop:10}}>
                <Text style={styles.formLabel}>Alamat</Text>
                <TextInput multiline={true}
    numberOfLines={10} placeholder='Alamat Lengkap' style={styles.formInputAddress}></TextInput>
            </View>
            <View style={{marginTop:10}}>
                <Text style={styles.formLabel}>Metode Pembayaran</Text>
                <TextInput placeholder='Pilih Pembayaran' style={styles.formInput}></TextInput>
            </View>
            <View style={{marginTop:10}}>
                <Text style={styles.formLabel}>Jasa Pengiriman</Text>
                <TextInput placeholder='Pilih Jasa Pengiriman' style={styles.formInput}></TextInput>
            </View>
            <View style={{marginTop:30,flexDirection:'row'}}>
                <Text style={{flex:1,fontSize:18,fontWeight:'800'}}>Sub Total</Text>
                <Text style={{justifyContent:'flex-end',fontSize:18,fontWeight:'800'}}>12,000</Text>
            </View>
            <View style={{marginTop:10,flexDirection:'row'}}>
                <Text style={{flex:1,fontSize:18,fontWeight:'800'}}>Ongkos Kirim</Text>
                <Text style={{justifyContent:'flex-end',fontSize:18,fontWeight:'800'}}>22,000</Text>
            </View>
            <View style={{marginTop:10,flexDirection:'row'}}>
                <Text style={{flex:1,fontSize:18,fontWeight:'800'}}>Total Biaya</Text>
                <Text style={{justifyContent:'flex-end',fontSize:18,fontWeight:'800'}}>34,000</Text>
            </View>
            <View style={{marginTop:20}}>
              <TouchableHighlight style={{backgroundColor:'#E96E6E',borderRadius:10}}>
              <Text style={{color:'white',fontWeight:'600',padding:10,fontSize:18,textAlign:'center'}}>Checkout</Text>
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
    marginTop:10,
    marginHorizontal:18,
    marginBottom:150
  },
  formInput:{
      borderWidth:.3,
      height:40,
      padding:10,
      color:'#969292',
      borderRadius:5,
      marginTop:10
  },
  formInputAddress:{
    borderWidth:.3,
    color:'#969292',
    borderRadius:5,
    marginTop:10,
    height:80,
    textAlignVertical: 'top',
    padding:10
}
});

export default Cart;
