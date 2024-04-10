import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import {Text, View, Image, ImageBackground} from 'react-native';
import { ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import styleSplash from './splashStyle.js'
import fundo from './../../assets/design/appDesign/1.png'
const SplashScreen = () => {
    const navigation =useNavigation(); 
    useEffect (() =>{
      checarLogin();
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
      <ImageBackground source={fundo} resizeMode='contain'>
        <Image source={require('./../../assets/imgs/SplashScreen/placaZoo.png')} style={styleSplash.titulo}/>
        <View style={styleSplash.imgCarregamento}>
            <Image source={'./../assets/imgs/SplashScreen/arara-unscreen.gif'} style={styleSplash.gif}/>
        </View>
      </ImageBackground>
    </View>
  );
};

  export default SplashScreen;