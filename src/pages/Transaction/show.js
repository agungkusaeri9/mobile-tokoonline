import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Topbar from '../../components/Topbar';

const TransactionDetail = () => {
  return (
    <View>
      <Topbar page={'Detail Pesanan'} />
      <ScrollView>
        <View style={styles.wrapper}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 18, fontWeight: '800', flex: 1}}>
                UUID
              </Text>
              <Text style={{fontSize: 18, fontWeight: '600', flex: 2}}>
                123456789
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: '#D3CCCC',
                borderBottomWidth: 0.4,
                marginVertical: 10,
              }}
            />
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 18, fontWeight: '800', flex: 1}}>
                Nama
              </Text>
              <Text style={{fontSize: 18, fontWeight: '600', flex: 2}}>
                Agung Kusaeri
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: '#D3CCCC',
                borderBottomWidth: 0.4,
                marginVertical: 10,
              }}
            />
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 18, fontWeight: '800', flex: 1}}>
                Email
              </Text>
              <Text style={{fontSize: 18, fontWeight: '600', flex: 2}}>
                agung.kusaeri@gmail.com
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: '#D3CCCC',
                borderBottomWidth: 0.4,
                marginVertical: 10,
              }}
            />
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 18, fontWeight: '800', flex: 1}}>
                Alamat
              </Text>
              <Text style={{fontSize: 18, fontWeight: '600', flex: 2}}>
                Kp. Citeko Kaler RT 07/03 Ds. Citeko Kaler, Kec. Plered, Kab.
                Purwakarta, Jawa Barat 41162
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: '#D3CCCC',
                borderBottomWidth: 0.4,
                marginVertical: 10,
              }}
            />
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 18, fontWeight: '800', flex: 1}}>
                Pembayaran
              </Text>
              <Text style={{fontSize: 18, fontWeight: '600', flex: 2}}>
                <View>
                  <Text style={{fontSize: 18, fontWeight: '500'}}>
                    Bank Mandiri
                  </Text>
                  <Text style={{fontSize: 18, fontWeight: '500'}}>
                    123456789
                  </Text>
                  <Text style={{fontSize: 18, fontWeight: '500'}}>
                    Agung Kusaeri
                  </Text>
                </View>
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: '#D3CCCC',
                borderBottomWidth: 0.4,
                marginVertical: 10,
              }}
            />
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 18, fontWeight: '800', flex: 1}}>
                Kurir
              </Text>
              <Text style={{fontSize: 18, fontWeight: '600', flex: 2}}>
                JNE
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: '#D3CCCC',
                borderBottomWidth: 0.4,
                marginVertical: 10,
              }}
            />
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 18, fontWeight: '800', flex: 1}}>
                Nomor Resi
              </Text>
              <Text style={{fontSize: 18, fontWeight: '600', flex: 2}}>
                JNE1234567
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: '#D3CCCC',
                borderBottomWidth: 0.4,
                marginVertical: 10,
              }}
            />
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 18, fontWeight: '800', flex: 1}}>
                Sub Total
              </Text>
              <Text style={{fontSize: 18, fontWeight: '600', flex: 2}}>
                100,000
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: '#D3CCCC',
                borderBottomWidth: 0.4,
                marginVertical: 10,
              }}
            />
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 18, fontWeight: '800', flex: 1}}>
                Biaya Pengiriman
              </Text>
              <Text style={{fontSize: 18, fontWeight: '600', flex: 2}}>
                12,000
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: '#D3CCCC',
                borderBottomWidth: 0.4,
                marginVertical: 10,
              }}
            />
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 18, fontWeight: '800', flex: 1}}>
                Total Bayar
              </Text>
              <Text style={{fontSize: 18, fontWeight: '600', flex: 2}}>
                112,000
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: '#D3CCCC',
                borderBottomWidth: 0.4,
                marginVertical: 10,
              }}
            />
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 18, fontWeight: '800', flex: 1}}>
                Bukti Pembayaran
              </Text>
              <View style={{fontSize: 18, fontWeight: '600', flex: 2}}>
                <Text
                  style={{
                    backgroundColor: '#E96E6E',
                    padding: 3,
                    width: 50,
                    color: 'white',
                    borderRadius: 8,
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  Upload
                </Text>
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
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 18, fontWeight: '800', flex: 1}}>
                Status
              </Text>
              <View style={{fontSize: 18, fontWeight: '600', flex: 2}}>
                <Text
                  style={{
                    backgroundColor: 'green',
                    padding: 3,
                    width: 50,
                    color: 'white',
                    borderRadius: 8,
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  Sukses
                </Text>
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

export default TransactionDetail;
