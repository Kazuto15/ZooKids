import { StatusBar } from 'expo-status-bar';
import {Pressable, Text, TextInput, View, Image } from 'react-native';

import styleLogin from './styleLogin.js'

export default function LoginScreen({navigation}) {
  
  const goCadastro =() =>{
    navigation.navigate('Cadastro')
  }
  return (
    <View style={styleLogin.container}>
      <View>
        <Text style={styleLogin.title}>Login</Text>
      </View>

      <View>
       <TextInput
       inputMode='text'
       style={styleLogin.textInput}
       placeholder='Email:'
       />
       <TextInput
       inputMode='password'
       style={styleLogin.textInput}
       placeholder='Senha:'
       />

      <View>
        <Pressable style={styleLogin.img}>
          <Image source={require('./../../assets/Logar2.jpg')} style={styleLogin.img}/>
        </Pressable>
      </View>
      <Pressable onPress={goCadastro}>
        <Image source={require('./../../assets/LoginCadastro/placa_cad.png')} style={styleLogin.cad}/>
      </Pressable>
      </View>
    </View>
  );
}
