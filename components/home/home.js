import React from 'react';
import { Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styleHome from './styleHome.js';

export default function HomeScreen({ navigation }) {
  const habitats = [
    { id: 1, name: 'Habitat 1', image:require('./../../assets/habitats/artico_resized.jpg'), backgroundColor:'#A9DAED'},
    { id: 2, name: 'Habitat 2', image:require('./../../assets/habitats/pantanal_resized.jpeg'), backgroundColor:'#A3BB33'},
    { id: 3, name: 'Habitat 3', image:require('./../../assets/habitats/amazonia_resized.jpeg'), backgroundColor:'#4B6C24'},
    { id: 4, name: 'Habitat 4', image:require('./../../assets/habitats/savana1_resized.jpeg'), backgroundColor:'#72721E'},
    { id: 5, name: 'Habitat 5', image:require('./../../assets/habitats/aquario.jpeg'), backgroundColor:'#39657A'},
    { id: 6, name: 'Habitat 6', image:require('./../../assets/habitats/dino_resized.jpeg'), backgroundColor:'#524433'},
  ];

  return (
    <SafeAreaView style={styleHome.container}>
      <View style={styleHome.habitatsContainer}>
      <Image source={require('./../../assets/imgs/habitats/placaZoo.png')} style={styleHome.titulo}/>
          {habitats.map((habitat) => (
        <View style={[styleHome.fundoHabitat,{ backgroundColor: habitat.backgroundColor }]}>
          <View key={habitat.id} style={styleHome.habitat}>
            <Image source={habitat.image} style={styleHome.habitatImage} />
            {/* <Text style={styleHome.nomeHabitat}>{habitat.name}</Text> */}
          </View>
        </View>
        ))}
      </View>
    </SafeAreaView>
  );
}
