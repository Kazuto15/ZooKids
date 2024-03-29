import { StatusBar } from "expo-status-bar";
import { Pressable, Text, TextInput, View, Image, ImageBackground } from "react-native";
import {useFonts, ComicNeue_700Bold, ComicNeue_400Regular} from '@expo-google-fonts/comic-neue'

import styleLogin from "./styleLogin.js";
import fundo from '../../assets/design/appDesign/3.png';


export default function LoginScreen({ navigation }) {
  
  const [fonteLoaded] = useFonts({
    ComicNeue_700Bold,
    ComicNeue_400Regular
  });
  
  if (!fonteLoaded){
    return null;
  }

  const goCadastro = () => {
    navigation.navigate("Cadastro");
  };
  const goHome = () => {
    navigation.navigate("Home");
  };
  // const login = async () => {};
  //   const login = async () => {
  //     try {
  //         const response = await axios.get(`http://localhost/apiZoo/userCredentials?email=${email}&senha=${senha}`);
  //         console.log(response.data);
  //         const idUser = response.data['id'];
  //         AsyncStorage.setItem('id', idUser)
  //         .then(() => {
  //             console.log('salvo com sucesso');
  //         })
  //         .catch(() => {
  //             console.error("Erro no salvamento local", error);
  //         })
  //         navigation.navigate('Loading', { login: 'login' });
  //     } catch (error) {
  //         console.error('Erro ao tentar logar', error);
  //         return false;
  //     }
  // }
  return (
    <View style={styleLogin.container}>
      <ImageBackground source={fundo} style={styleLogin.fundo} resizeMode="cover">

      <View style={styleLogin.box}>
      <View>
        <Text style={styleLogin.title}>Login</Text>
      </View>
        <TextInput
          inputMode="text"
          style={styleLogin.textInput}
          placeholder="Email:"
        />
        <TextInput
          inputMode="password"
          style={styleLogin.textInput}
          placeholder="Senha:"
        />

        <View style={styleLogin.boxEntrar}>
          <Text style={styleLogin.entrar}>
            Entrar
          </Text>
        </View>
        <View style={styleLogin.cadBox}>
        <Pressable onPress={goCadastro}>
        <Image
          source={require("./../../assets/imgs/LoginCadastro/placa_cad.png")}
          style={styleLogin.cad}
        />
      </Pressable>
        </View>
      </View>
      
      </ImageBackground>
    </View>
  );
}
