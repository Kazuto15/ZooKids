import React, {useEffect, useState} from "react";
import { Text, View, Image, Pressable, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import axios, { Axios } from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';


import styleProfile from "./profileStyle.js";
import profileImage from "./../../assets/imgs/habitats/placaZoo.png";

export default function ProfileScreen({ navigation }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [data, setData] = useState('');
    
    useEffect(() => {
        const recuperarDados = async () => {
            try {
                const idUser = await AsyncStorage.getItem('id')

                if (idUser !== null){ 
                    const response = await axios.get(`http://localhost/apiZoo/userShow?id=${idUser}`);
                    console.log(response.data);
                    setData(response.data)

                    setNome(response.data.nome || '');
                    setEmail(response.data.email || '');
                    setSenha(response.data.senha || '');
                }else{
                console.log(`Nada por aqui`)
             }
            } catch (error) {
                console.error('Erro ao carregar os dados do usuário', error);
            }
        };

        recuperarDados();
    }, []);

    const update = async () => {
        const dadosUser = {
            'id': data.id,
            'nome': nome,
            'email':email,
            'senha':senha,
        }
        console.log(dadosUser);
        const axiosConfig = {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        };


        try {
          const response = await axios.post('http://localhost/apiZoo/userUpdate', dadosUser, axiosConfig);
          const idUser = response.data['id']
          const emailUser = response.data['emailUser']
          const senhaUser = response.data['senhaUser']
          AsyncStorage.setItem('id',idUser)
          AsyncStorage.setItem('emailUser',emailUser)
          AsyncStorage.setItem('senhaUser',senhaUser)
          .then(() =>{
            console.log("Dados armazenados com sucesso");
          })
          .catch(error => {
            console.log('Erro ao armazenar os dados',error);
         })
        
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
                    value={nome}
                    style={styleProfile.textInput}
                    placeholder="Nome:"
                />
                
                <TextInput
                    onChangeText={setEmail}
                    value={email}
                    style={styleProfile.textInput}
                    placeholder="Email:"
                />
                <TextInput
                    onChangeText={setSenha}
                    value={senha}
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
