import { StatusBar } from "expo-status-bar";
import { Pressable, Text, TextInput, View, Image } from "react-native";

import styleLogin from "./styleLogin.js";

export default function LoginScreen({ navigation }) {
  const goCadastro = () => {
    navigation.navigate("Cadastro");
  };
  const goHome = () => {
    navigation.navigate("Home");
  };
  const login = async () => {};
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
      <View>
        <Text style={styleLogin.title}>Login</Text>
      </View>

      <View style={styleLogin.box}>
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

        <View>
          <Pressable style={styleLogin.img} onPress={login}>
            <Text style={styleLogin.logar}>Logar</Text>
          </Pressable>
        </View>
      </View>
      <Pressable onPress={goCadastro}>
        <Image
          source={require("./../../assets/LoginCadastro/placa_cad.png")}
          style={styleLogin.cad}
        />
      </Pressable>
    </View>
  );
}
