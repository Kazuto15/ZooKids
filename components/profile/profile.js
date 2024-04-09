import React, {useState} from "react";
import { Text, View, Image, Pressable, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import axios, { Axios } from 'axios'

import styleProfile from "./profileStyle.js";
import profileImage from "./../../assets/imgs/habitats/placaZoo.png";

export default function ProfileScreen({ navigation }) {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    const update = async () => {
        const dadosUsuario = {
            nome: nome,
            email: email,
            senha: senha,
        };
        console.log('Dados do usuário:', { nome, email, senha });
        const axiosConfig = {
          headers: {
            //  'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        };
        try {
          const response = await axios.post('http://localhost/apiZoo/userUpdate', dadosUsuario, axiosConfig);
          console.log(response.data);
          navigation.navigate('Home');
        } catch (error) {
          console.error('Erro ao atualizar jogador1', error);
          return false;
        }
    }
    const voltar = async () => {
        navigation.replace(`Home`)
    }

    return (
        <View style={styleProfile.container}>
            <View style={styleProfile.imgContainer}>
                <FontAwesome
                    style={styleProfile.headerUser}
                    name="user-circle-o"
                    size={100}
                    color="black"
                />
            </View>

            <View style={styleProfile.inputContainer}>
                <TextInput
                      onChangeText={setNome}
                    style={styleProfile.textInput}
                    placeholder="Nome:"
                />
                
                <TextInput
                      onChangeText={setEmail}
                    style={styleProfile.textInput}
                    placeholder="Email:"
                />
                <TextInput
                      onChangeText={setSenha}
                    style={styleProfile.textInput}
                    placeholder="Senha:"
                    secureTextEntry={true}
                />
            </View>
            <View style={styleProfile.boxBtn}>
                <Pressable onPress={update}>
                    <Text style={styleProfile.btnText}>Atualizar </Text>
                </Pressable>
            </View>
            <View style={styleProfile.boxBtn}>
                <Pressable onPress={voltar}>
                    <Text style={styleProfile.btnText}>Voltar </Text>
                </Pressable>
            </View>
        </View>
    );
}
