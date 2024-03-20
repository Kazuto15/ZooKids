import { StatusBar } from 'expo-status-bar';
import {Pressable, Text, View, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styleHome from './styleHome.js'
import MenuBar from './../menuBar/menuBar.js';

export default function HomeScreen({navigation}) {
  
  return (
    <SafeAreaView style ={{flex:1, backgroundColor: 'white'}}>
      <View style={styleHome.container}>
          <View style={styleHome.titleContainer}>
            <Text style={styleHome.titleText}>Habitats</Text>
          </View>
        <ScrollView contentContainerStyle={styleHome.scrollViewContent}>

          <View style={styleHome.habitat}>
            <Text style={styleHome.nomeHabitat}>
              Habitat 1
            </Text>
          </View>
          <View style={styleHome.habitat}>
            <Text style={styleHome.nomeHabitat}>
              Habitat 2
            </Text>
          </View>
          <View style={styleHome.habitat}>
            <Text style={styleHome.nomeHabitat}>
              Habitat 3
            </Text>
          </View>
          <View style={styleHome.habitat}>
            <Text style={styleHome.nomeHabitat}>
              Habitat 4
            </Text>
          </View>

        </ScrollView>
          <MenuBar navigation={navigation}/>
      </View>
    </SafeAreaView>
  );
}
