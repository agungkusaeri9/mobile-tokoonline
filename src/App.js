import React from 'react';
import {View} from 'react-native';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductShow from './components/Product/show';
import {StyleSheet} from 'react-native';
import Topbar from './components/Topbar';
import LupaPassword from './pages/LupaPassword';
import KodeVerifikasi from './pages/KodeVerifikasi';
import PasswordBaru from './pages/PasswordBaru';

const App = () => {
  return (
    <View>
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Home/> */}
      {/* <ProductShow/> */}
      {/* <LupaPassword/> */}
      {/* <KodeVerifikasi /> */}
      <PasswordBaru/>
      <Navbar />
      {/* <Topbar/> */}
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
