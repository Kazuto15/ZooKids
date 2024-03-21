import { StatusBar } from 'expo-status-bar';
import {Pressable, Text, View, FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styleHome from './styleHome.js'
import MenuBar from './../menuBar/menuBar.js';

export default function HomeScreen({navigation}) {
  const habitats = [
    {id:1, name: 'Habitat 1'},
    {id:2, name: 'Habitat 2'},
    {id:3, name: 'Habitat 3'},
    {id:4, name: 'Habitat 4'},
    {id:5, name: 'Habitat 5'},
    {id:6, name: 'Habitat 6'},
    {id:7, name: 'Habitat 7'},
    {id:8, name: 'Habitat 8'},
  ];
    const renderHabitat = ({item}) =>(
      <View style={styleHome.habitat}>
        {/* <Image source={item.image} style={styleHome.habitatImage}/> */}
        <View style={styleHome.habitatTxtCont}>
          <Text style={styleHome.nomeHabitat}>{item.name}</Text>
        </View>
      </View>
    );
  
  return (
    <SafeAreaView style ={{flex:1, backgroundColor: 'white'}}>
      <View style={styleHome.container}>
          <View style={styleHome.titleContainer}>
            <Text style={styleHome.titleText}>Habitats</Text>
          </View>
        
        <FlatList
        data={habitats}
        renderItem={renderHabitat}
        keyExtractor={(item) => item.id.toString()}
        style={{flex:1}}
        
        />
          <MenuBar navigation={navigation}/>
      </View>
    </SafeAreaView>
  );
}
