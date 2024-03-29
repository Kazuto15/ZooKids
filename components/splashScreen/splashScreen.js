import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import {Text, View, Image} from 'react-native';

import styleSplash from './splashStyle.js'

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
    <View style={styleSplash.container}>
      
      <Image source={require('./../../assets/imgs/SplashScreen/placaZoo.png')} style={styleSplash.titulo}/>
      <View style={styleSplash.imgCarregamento}>
          <Image source={'./../assets/imgs/SplashScreen/arara-unscreen.gif'} style={styleSplash.gif}/>
      </View>
    </View>
  );
};

  export default SplashScreen;