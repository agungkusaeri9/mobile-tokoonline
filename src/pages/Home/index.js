import React from 'react';
import {View, Text, ScrollView, Image, TextInput,StyleSheet} from 'react-native';
import Product from '../Product';
const Home = () => {
  return (
    <View>
      <ScrollView>
        <View style={styles.wrapper}>
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
            <View>
              <Text style={{marginTop: 20, fontSize: 25, fontWeight: '600'}}>
                Terlaris
              </Text>
              <View style={{flexDirection: 'row-reverse', marginTop: 10}}>
                <ScrollView horizontal>
                  <Product
                    name="Jaket Pria Ori Bandung"
                    price="120000"
                    image={require('../../assets/image/jaket1.png')}
                  />
                  <Product
                    name="Jaket Wanita Ori Majalengka"
                    price="120000"
                    image={require('../../assets/image/jaket1.png')}
                  />
                  <Product
                    name="Jaket Pria Ori Bandung"
                    price="120000"
                    image={require('../../assets/image/jaket1.png')}
                  />
                  <Product
                    name="Jaket Pria Ori Bandung"
                    price="120000"
                    image={require('../../assets/image/jaket1.png')}
                  />
                </ScrollView>
              </View>
            </View>
            <View>
              <Text style={{fontSize: 25, fontWeight: '600'}}>
                Mungkin Anda Suka
              </Text>
              <View style={{flexDirection: 'row-reverse', marginTop: 10}}>
                <ScrollView horizontal>
                  <Product
                    name="Jaket Pria Ori Bandung"
                    price="120000"
                    image={require('../../assets/image/jaket1.png')}
                  />
                  <Product
                    name="Jaket Wanita Ori Majalengka"
                    price="120000"
                    image={require('../../assets/image/jaket1.png')}
                  />
                  <Product
                    name="Jaket Pria Ori Bandung"
                    price="120000"
                    image={require('../../assets/image/jaket1.png')}
                  />
                  <Product
                    name="Jaket Pria Ori Bandung"
                    price="120000"
                    image={require('../../assets/image/jaket1.png')}
                  />
                </ScrollView>
              </View>
            </View>
            <View>
              <Text style={{fontSize: 25, fontWeight: '600'}}>
                Produk Terbaru
              </Text>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <View style={{flex: 1}}>
                  <Product
                    name="Jaket Pria Ori Bandung"
                    price="120000"
                    image={require('../../assets/image/jaket1.png')}
                  />
                </View>
                <View style={{flex: 1}}>
                  <Product
                    name="Jaket Pria Ori Bandung"
                    price="120000"
                    image={require('../../assets/image/jaket1.png')}
                  />
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Product
                  name="Jaket Pria Ori Bandung"
                  price="120000"
                  image={require('../../assets/image/jaket1.png')}
                />
                <Product
                  name="Jaket Wanita Ori Majalengka"
                  price="120000"
                  image={require('../../assets/image/jaket1.png')}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper:{
    flex:1,
    marginHorizontal:18,
    marginTop:20
  }
})
export default Home;
