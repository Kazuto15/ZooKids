import { StatusBar } from 'expo-status-bar';
import {Pressable, Text, View } from 'react-native';

import styleHome from './styleHome.js'

export default function HomeScreen() {
  
  return (
    <View style={styleHome.container}>
      <View style={styleHome.title}>
        <Text style={styleHome.titleText}>Habitats</Text>
      </View>
      <StatusBar style="auto"/>
    </View>
  );
}
