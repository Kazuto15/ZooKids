import React, { useState } from "react";
import { Text, View, Image, Pressable, FlatList, Modal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";

import styleHome from "./styleHome.js";

export default function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  const habitats = [
    {
      id: 1,
      name: "Habitat 1",
      image: require("./../../assets/habitats/artico_resized.jpg"),
      backgroundColor: "#A9DAED",
      screen: "habitat1",
    },
    {
      id: 2,
      name: "Habitat 2",
      image: require("./../../assets/habitats/pantanal_resized.jpeg"),
      backgroundColor: "#A3BB33",
      screen: navigation.navigate("Habitat1"),
    },
    {
      id: 3,
      name: "Habitat 3",
      image: require("./../../assets/habitats/amazonia_resized.jpeg"),
      backgroundColor: "#4B6C24",
      screen: navigation.navigate("Habitat1"),
    },
    {
      id: 4,
      name: "Habitat 4",
      image: require("./../../assets/habitats/savana1_resized.jpeg"),
      backgroundColor: "#72721E",
      screen: navigation.navigate("Habitat1"),
    },
    {
      id: 5,
      name: "Habitat 5",
      image: require("./../../assets/habitats/aquario.jpeg"),
      backgroundColor: "#39657A",
      screen: navigation.navigate("Habitat1"),
    },
    // {
    //   id: 6,
    //   name: "Habitat 6",
    //   image: require("./../../assets/habitats/dino_resized.jpeg"),
    //   backgroundColor: "#524433",
    // },
  ];

  const renderItem = ({ item }) => (
    
    <Pressable onPress={() => navigation.navigate(item.screen)}>
      <View
        style={[
          styleHome.fundoHabitat,
          { backgroundColor: item.backgroundColor },
        ]}
      >
        <View key={item.id} style={styleHome.habitat}>
          <Image source={item.image} style={styleHome.habitatImage} />
          {/* <Text style={styleHome.nomeHabitat}>{item.name}</Text> */}
        </View>
      </View>
    </Pressable>
  );

  return (
    <SafeAreaView style={styleHome.container}>
      <View style={styleHome.header}>
        <Pressable onPress={() => navigation.navigate("Profile")}>
          <FontAwesome style={styleHome.headerUser} name="user-circle-o" size={30} color="black" />
        </Pressable>
         
        <Pressable onPress={()=>{setModalVisible(true);}}>
          <FontAwesome style={styleHome.headerConfig} name="gear" size={36}color="black"
          />
        </Pressable>
      </View>
      <View style={styleHome.habitatsContainer}>
        <FlatList
          data={habitats}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styleHome.modalContainer}>
          <View></View>
          <Pressable onPress={() => setModalVisible(false)}>
            <Text style={styleHome.closeButton}>Voltar</Text>
          </Pressable>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
