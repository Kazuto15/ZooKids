import React, { useState } from 'react';
import { StatusBar, StyleSheet, ImageBackground, Text, TextInput, View, Pressable, Image } from 'react-native';
import axios, {Axios} from 'axios';

import styleCadastro from './styleRegister'; // Importação corrigida do arquivo de estilo
import fundo from '../../assets/LoginCadastro/fundo_resized_resized.jpg';

export default function RegisterScreen({ navigation }) {
  
  const goLogin = () => {
    navigation.navigate('Login');
  }
  
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const cadastrar = async () => {
    const dadosUsuario = {
      nome: nome,
      cpf: cpf,
      email: email,
      senha: senha,
    };
    const axiosConfig = {
      headers: {
          /* 'Accept': 'application/json',
          */'Content-Type': 'application/x-www-form-urlencoded'
      }
  };
  try {
      const response = await axios.post('http://localhost/apiZoo/userInsert', dadosUsuario, axiosConfig );
      console.log(response.data);
      navigation.navigate('Home');
  } catch (error) {
      console.error('Erro ao criar jogador1', error );
      return false;
  }
}

  return (
    <View style={styleCadastro.container}>
      <ImageBackground source={fundo} style={styleCadastro.fundo} resizeMode="cover">
        <View>
          <TextInput
            onChangeText={setNome}
            style={styleCadastro.textInput}
            placeholder='Nome:'
          />
          <TextInput
            onChangeText={setCpf}
            style={styleCadastro.textInput}
            placeholder='CPF:'
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
            secureTextEntry={true} // Para ocultar a senha
          />
          <StatusBar style="auto" />
        </View>
        <View>
          <Pressable onPress={cadastrar}>
            <Text>Cadastrar</Text> {/* Corrigido o texto do botão de cadastrar */}
          </Pressable>
        </View>
        <View>
          {/* <Pressable onPress={goLogin}>
            <Image source={require('./../../assets/LoginCadastro/placa_log.png')} style={styleCadastro.cad} />
          </Pressable> */}
        </View>
      </ImageBackground>
    </View>
  );
}
