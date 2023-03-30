import { View, TextInput, Text, TouchableOpacity, } from 'react-native';
import React from 'react';
import { defaultStyle, colors } from '../styles/styles';
import Header from '../components/Header';
import { Avatar } from 'react-native-paper';



const Home = () => {


  return (
    <View style={defaultStyle}>
      <Header />


      <View style={{
        paddingTop: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      >
        <View>
          <Text style={{ fontSize: 25 }}>BellLOut</Text>
          <Text style={{ fontSize: 25, fontWeight: '900' }}>Our Product</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Avatar.Icon
              icon={'magnify'}
              size={50}
              color={'gray'}
              style={{ backgroundColor: colors.color4, elevation: 15 }}

            />
          </TouchableOpacity>
        </View>
      </View>



    </View>










  );
};

export default Home;

