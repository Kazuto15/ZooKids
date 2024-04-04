import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import SplashScreen  from './components/splashScreen/splashScreen.js'
import HomeScreen from './components/home/home';
import LoginScreen from './components/login/login.js';
import RegisterScreen from './components/register/register';
import ProfileScreen from './components/profile/profile.js';
import Habitat1 from './components/habitats/habitat1/habitat1'



const stack = createNativeStackNavigator();
export default function App(){
  return(
      <NavigationContainer>
        <stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
          <stack.Screen name="Splash" component={SplashScreen}/>
          <stack.Screen name="Home" component={HomeScreen}/>
          <stack.Screen name="Login" component={LoginScreen}/>
          <stack.Screen name="Cadastro" component={RegisterScreen}/>
          <stack.Screen name="Profile" component={ProfileScreen}/>
          <stack.Screen name="habitat1" component={Habitat1}/>
        </stack.Navigator>
      </NavigationContainer>
  )
}