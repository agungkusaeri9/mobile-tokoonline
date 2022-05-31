import React from 'react';
import {View,StyleSheet,Image,Text} from 'react-native';
import Topbar from '../../components/Topbar';

const Account = () => {
    return(
        <View>
            <Topbar page={'Akun Saya'}/>
            <View style={styles.wrapper}>
                <View style={{alignItems:'center'}}>
                    <Image source={require('../../assets/image/user-profile.png')} style={{height:80,width:80,borderRadius:50,textAlign:'center'}}/>
                    <Text style={{fontSize:22,fontWeight:'700',marginTop:15}}>Agung Kusaeri</Text>
                </View>
                <View style={{marginTop:25}}>
                    <Text style={{fontSize:20,fontWeight:'600',marginVertical:4}}>Profile Saya</Text>
                    <View style={{borderBottomColor: '#D3CCCC',borderBottomWidth: 0.4,marginVertical:5,}}></View>
                    <Text style={{fontSize:20,fontWeight:'600',marginVertical:4}}>Edit Profile</Text>
                    <View style={{borderBottomColor: '#D3CCCC',borderBottomWidth: 0.4,marginVertical:5,}}></View>
                    <Text style={{fontSize:20,fontWeight:'600',marginVertical:4}}>Ubah Password</Text>
                    <View style={{borderBottomColor: '#D3CCCC',borderBottomWidth: 0.4,marginVertical:5,}}></View>
                    <Text style={{fontSize:20,fontWeight:'600',marginVertical:4}}>Transaksi</Text>
                    <View style={{borderBottomColor: '#D3CCCC',borderBottomWidth: 0.4,marginVertical:5,}}></View>
                    <Text style={{fontSize:20,fontWeight:'600',marginVertical:4}}>Keranjang Saya</Text>
                    <View style={{borderBottomColor: '#D3CCCC',borderBottomWidth: 0.4,marginVertical:5,}}></View>
                    <Text style={{fontSize:20,fontWeight:'600',marginVertical:4}}>Logout</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
  wrapper: {
    zIndex: 0,
    marginTop: 10,
    marginHorizontal: 18,
    marginBottom: 150,
  },
});

export default Account; 