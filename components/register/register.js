import React, { useState } from 'react';
import { StatusBar, StyleSheet, ImageBackground, Text, TextInput, View, Pressable, Image } from 'react-native';
import axios, { Axios } from 'axios'
import { useFonts, ComicNeue_700Bold, ComicNeue_400Regular } from '@expo-google-fonts/comic-neue'

import styleCadastro from './styleRegister';
import fundo from '../../assets/design/appDesign/2.png';

export default function RegisterScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [fonteLoaded] = useFonts({
    ComicNeue_700Bold,
    ComicNeue_400Regular
  });

  if (!fonteLoaded) {
    return null;
  }

  const goLogin = () => {
    navigation.navigate('Login');
  }


  const cadastrar = async () => {
    const dadosUsuario = {
      nome: nome,
      email: email,
      senha: senha,
    };
    const axiosConfig = {
      headers: {
        //  'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
    try {
      const response = await axios.post('http://localhost/apiZoo/userInsert', dadosUsuario, axiosConfig);
      console.log(response.data);
      navigation.navigate('Login');
    } catch (error) {
      console.error('Erro ao criar jogador1', error);
      return false;
    }
  }

  return (
    <View style={styleCadastro.container}>
      <ImageBackground source={fundo} style={styleCadastro.fundo} resizeMode="cover">
        <View style={styleCadastro.box}>
          <Text style={styleCadastro.title}>Cadastre-se</Text>
          <TextInput
            onChangeText={setNome}
            style={styleCadastro.textInput}
            placeholder='Nome:'
          />
          
          <TextInput
            onChangeText={setEmail}
            style={styleCadastro.textInput}
            placeholder='Email:'
          />
          <TextInput
            onChangeText={setSenha}
            style={styleCadastro.textInput}
            placeholder='Senha:'
            secureTextEntry={true} 
          />
          <View style={styleCadastro.boxBtn}>
            <Pressable onPress={cadastrar}>
              <Text style={styleCadastro.btnText}>Cadastrar</Text>
            </Pressable>
          </View>
          <Pressable onPress={goLogin}>
              <Text style={styleCadastro.btnText}>login?</Text>
            </Pressable>
        </View>
        <StatusBar style="auto" />
  </ImageBackground>
  </View>
);
}