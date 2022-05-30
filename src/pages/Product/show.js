import React,{useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TextInput,
  TouchableHighlight
} from 'react-native';
import Topbar from '../../components/Topbar';

const ProductShow = () => {
const [qty,setQty] = useState(0);
  return (
    <View>
      <Topbar page={'Nama Produk'} />
      <ScrollView>
        <View style={styles.wrapper}>
          <View>
            <Image
              source={require('../../assets/image/jaket1.png')}
              style={styles.ProductImage}></Image>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <ScrollView horizontal>
              <Image
                style={styles.galeryImage}
                source={require('../../assets/image/jaket1.png')}></Image>
              <Image
                style={styles.galeryImage}
                source={require('../../assets/image/jaket1.png')}></Image>
              <Image
                style={styles.galeryImage}
                source={require('../../assets/image/jaket1.png')}></Image>
              <Image
                style={styles.galeryImage}
                source={require('../../assets/image/jaket1.png')}></Image>
            </ScrollView>
          </View>
          <View>
            <Text style={styles.productCategory}>Jaket</Text>
            <Text style={styles.productName}>Jaket Jeans Ori Bandung</Text>
            <Text style={styles.productDescription}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </Text>
            <Text style={styles.productStock}>Stok : 10</Text>
            <Text style={styles.productPrice}>Rp. 120000</Text>
            <View style={{marginTop:20}}>
              <Text style={{marginBottom:10}}>Jumlah</Text>
              {/* <TextInput style={styles.inputAmount}></TextInput> */}
              <View style={{flexDirection: 'row', width: 80}}>
                <TouchableHighlight
                  style={{flex: 1}} onPress={() => {setQty(qty - 1)}}>
                  <Text
                    style={{
                      fontSize: 18,
                      backgroundColor: '#aaaa',
                      textAlign: 'center',
                      color: 'white',
                      padding: 2,
                      borderRadius: 4,
                    }}>
                    -
                  </Text>
                </TouchableHighlight>
                <Text style={{flex: 2, alignSelf: 'center', fontSize: 18,textAlign:'center'}}>
                  {qty}
                </Text>
                <TouchableHighlight style={{flex: 1}}>
                  <Text
                    style={{
                      fontSize: 18,
                      backgroundColor: '#aaaa',
                      textAlign: 'center',
                      color: 'white',
                      padding: 2,
                      borderRadius: 4,
                    }} onPress={() => {
                      setQty(qty + 1)
                    }}>
                    +
                  </Text>
                </TouchableHighlight>
              </View>
            </View>
            <View style={{marginTop:10}}>
              <Text>Keterangan</Text>
              <TextInput placeholder='Masukan Keterangan Spesifikasi Produk' multiline={true}
    numberOfLines={10} style={{borderWidth:.4,borderColor:'#969292',borderRadius:5,textAlignVertical: 'top',height:80,marginTop:10,padding:10}}></TextInput>
            </View>
            <View style={{marginTop:20}}>
              <TouchableHighlight style={{backgroundColor:'#E96E6E',borderRadius:10}}>
              <Text style={{color:'white',fontWeight:'600',padding:10,fontSize:18,textAlign:'center'}}>Add To Cart</Text>
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
  galeryImage: {
    marginRight: 15,
    height: 60,
    width: 80,
  },
  ProductImage: {
    height: 350,
    width: '100%',
  },
  productCategory: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 15,
    marginBottom: 10,
  },
  productName: {
    fontSize: 28,
    fontWeight: '700',
  },
  productDescription: {
    fontSize: 13,
    fontWeight: '300',
    marginTop: 10,
    color:'black'
  },
  productStock: {
    fontSize: 13,
    fontWeight: '600',
    marginTop: 10,
  },
  productPrice: {
    fontSize: 26,
    fontWeight: '600',
    marginTop: 10,
  },
  inputAmount: {
    borderWidth: 1,
    width: '20%',
    fontSize: 14,
    padding: 0,
    paddingLeft: 10,
  },
});

export default ProductShow;
