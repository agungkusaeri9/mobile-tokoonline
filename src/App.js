import React from 'react';
import {View} from 'react-native';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductShow from './pages/Product/show';
import {StyleSheet} from 'react-native';
import Topbar from './components/Topbar';
import Cart from './pages/Cart';

const App = () => {
  return (
    <View style={{ backgroundColor:'#FDF0F3',flex:1 }}>
      <Cart/>
      <Navbar/>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper:{
    padding:10,
    backgroundColor: '#FDF0F3',
    minHeight:700
  }
})

export default App;
