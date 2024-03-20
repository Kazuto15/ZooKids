// MenuBar.js
import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import styleMenuBar from './styleMenuBar';

export default function MenuBar({ navigation }) {
  const goHome = () => {
    navigation.navigate('Home');
  }
  
  const goPerfil = () => {
    navigation.navigate('Perfil');
  }

  return (
    <View style={styleMenuBar.container}>
      <View style={styleMenuBar.menuContainer}>
        <View style={styleMenuBar.menuBar}>
        <Pressable
          style={styleMenuBar.button}
          onPress={() => goHome()}>
          <Image source={require('./../../assets/menubar/zoo.png')} style={styleMenuBar.buttonImage} />
        </Pressable>

        {/* <Pressable
          style={styleMenuBar.button}
          onPress={() => goPerfil()}>
          <Image source={require('./imgs/Perfil.png')} style={styleMenuBar.buttonImage} />
        </Pressable> */}
        </View>
      </View>
    </View>
  );
}
    
