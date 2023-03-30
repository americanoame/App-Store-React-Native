import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { defaultStyle } from '../styles/styles';
import Header from '../components/Header';

const Home = () => {
  return (
    <View style={defaultStyle}>

      <Header />
      <View>
        <Text style={{ fontSize: 25 }}>BellLOut</Text>
        <Text style={{ fontSize: 25, fontWeight: '900' }}>Our Product</Text>

      </View>


    </View>
  );
};

export default Home;