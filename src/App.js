import React from 'react';
import {View} from 'react-native';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (
    <View>
      {/* <Login />
      <Register /> */}
      <Home/>
      <Navbar />
    </View>
  );
};

export default App;
