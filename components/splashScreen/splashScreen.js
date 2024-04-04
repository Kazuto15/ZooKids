import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import {Text, View, Image, ImageBackground} from 'react-native';
import { ScrollView } from 'react-native';

import styleSplash from './splashStyle.js'
import fundo from './../../assets/imgs/SplashScreen/backSplash.png'
import arara from './../../assets/imgs/SplashScreen/arara-unscreen.gif'

const SplashScreen = () => {
    const navigation =useNavigation();

    useEffect (() =>{
        const timeout = setTimeout(navigateToHome, 7000);
        return () => clearTimeout(timeout);
    }, []);
    const navigateToHome = () => {
        navigation.navigate('Login')     
        // navigation.navigate('Home')

    }
  return (
    <ScrollView style={styleSplash.container} scrollEnabled={false}>
      <ImageBackground source={fundo} style={styleSplash.fundo} resizeMode="cover"> 
      <Image source={require('./../../assets/imgs/SplashScreen/placaZoo.png')} style={styleSplash.titulo}/>
      <View style={styleSplash.imgCarregamento}>
          <Image source={arara} style={styleSplash.gif}/>
      </View>
      </ImageBackground>
    </ScrollView>
  );
};

  export default SplashScreen;