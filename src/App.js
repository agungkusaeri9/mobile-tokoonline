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
import Transaction from './pages/Transaction';
import TransactionDetail from './pages/Transaction/show';
import Account from './pages/Account';
import AccountDetail from './pages/Account/show';
import AccountEdit from './pages/Account/edit';
import PasswordEdit from './pages/Password/edit';
import PasswordForget from './pages/Password/forget';
import Verification from './pages/Verification';
import PasswordCreate from './pages/Password/create';

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
