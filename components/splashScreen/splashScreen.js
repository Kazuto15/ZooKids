import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
<<<<<<< Updated upstream
import {Text, View, Image} from 'react-native';
=======
import {Text, View, Image, ImageBackground} from 'react-native';
import { ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

>>>>>>> Stashed changes

import styleSplash from './splashStyle.js'

const SplashScreen = () => {
    const navigation =useNavigation(); 
    useEffect (() =>{
<<<<<<< Updated upstream
        const timeout = setTimeout(navigateToHome, 1000);
        return () => clearTimeout(timeout);
=======
      checarLogin();
>>>>>>> Stashed changes
    }, []);
    const checarLogin =async() => {
      try{
        const emailSalvo = await AsyncStorage.getItem('emailUser');
        const SenhaSalva = await AsyncStorage.getItem('senhaUser')
      
        if (SenhaSalva && emailSalvo){
          
          setTimeout(() => navigation.replace('Home'),3650)
        }else{
          setTimeout(() => navigation.replace('Login'),3650)        
        }
      } catch(error){
        console.error('Erro ao verificar o seu Login', error);
        setTimeout(() => navigation.replace('Login'),3650)        
      }
    };


  return (
    <View style={styleSplash.container}>
      
      <Image source={require('./../../assets/SplashScreen/placaZoo.png')} style={styleSplash.titulo}/>
      <View style={styleSplash.imgCarregamento}>
          <Image source={'./../assets/SplashScreen/arara-unscreen.gif'} style={styleSplash.gif}/>
      </View>
    </View>
  );
};

  export default SplashScreen;