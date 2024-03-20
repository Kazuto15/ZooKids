import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, Text, TextInput, View, Pressable, Image } from 'react-native';

import styleCadastro from './styleRegister.js'
import fundo from '../../assets/LoginCadastro/fundo_resized_resized.jpg'

export default function RegisterScreen({navigation}) {
  
  const goLogin = () =>{
    navigation.navigate('Login')
  }
  const goHome = () =>{
    navigation.navigate('Home')
  }
  return (
    <View style={styleCadastro.container}>
      <ImageBackground source={fundo} style={styleCadastro.fundo} resizeMode="cover">
    <View>
       <TextInput
       inputMode='text'
       style={styleCadastro.textInput}
       placeholder='Nome:'
       />
       <TextInput
       inputMode='number'
       style={styleCadastro.textInput}
       placeholder='CPF:'
       />  
      <TextInput
       inputMode='text'
       style={styleCadastro.textInput}
       placeholder='Email:'
       /> 
       <TextInput
       inputMode='password'
       style={styleCadastro.textInput}
       placeholder='Senha:'
       /> 
       <StatusBar style="auto" />
       </View>
       <View>
        <Pressable onPress={goHome}>
          
        </Pressable>
       </View>
       <View>
          <Pressable onPress={goLogin}>
          <Image source={require('./../../assets/LoginCadastro/placa_log.png')} style={styleCadastro.cad}/>
          </Pressable>
       </View>
       </ImageBackground>
    </View>
    
  );
}