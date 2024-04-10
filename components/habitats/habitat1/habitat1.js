import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  Pressable,
  FlatList,
  Modal,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import styleHabitat from "./habitat1Style.js";

export default function Habitat1({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const goHome = () => {
    navigation.navigate("Home");
  };
  const animalDetails = {
    1: {
      name: "Urso-Polar",
      habitat: "Regiões Árticas",
      habits:
        "Os ursos polares são animais solitários e passam a maior parte do tempo caçando na neve e no gelo.",
      reproduction: "Cerca de 8 meses após a concepção",
      weight: "350 - 700 Kg",
      class: "Mamífero",
      image: require("../../../assets/habitats/Animals/ursoP.jpg")
    },
    2: {
      name: "Pinguim",
      habitat: "Regiões Antárticas",
      habits:
        "Os pinguins são animais sociais que vivem em grandes colônias e são excelentes nadadores.",
      reproduction: "Varia entre as espécies",
      weight: "1 - 45 Kg",
      class: "Ave",
      image: require("../../../assets/habitats/Animals/pinguin1.jpg"),
    },
    3: {
      name: "Raposa do Ártico",
      habitat: "Tundra Ártica",
      habits:
        "As raposas do ártico são animais solitários e têm uma dieta variada, incluindo lebres, roedores e aves.",
      reproduction: "Cerca de 52 dias após a concepção",
      weight: "3 - 9 Kg",
      class: "Mamífero",
      image: require("../../../assets/habitats/Animals/raposa.jpg"),
    },
    4: {
      name: "Leão-Marinho",
      habitat: "Oceano Antártico",
      habits:
        "Os leões-marinhos são excelentes nadadores e passam grande parte do tempo na água, alimentando-se de peixes e lulas.",
      reproduction: "Cerca de 11 meses após a concepção",
      weight: "220 - 450 Kg",
      class: "Mamífero",
      image: require("../../../assets/habitats/Animals/leao2.jpg"),
    },
    5: {
      name: "Foca",
      habitat: "Regiões Árticas e Antárticas",
      habits:
        "As focas são animais aquáticos e passam a maior parte do tempo na água, caçando peixes e outros alimentos marinhos.",
      reproduction: "Cerca de 11 meses após a concepção",
      weight: "90 - 370 Kg",
      class: "Mamífero",
      image: require("../../../assets/habitats/Animals/focaR.png"),
    },
  };
  const habitats = [
    {
      id: 1,
      name: "Habitat 1",
      backgroundColor: "#D9EAF3",
      image: require("../../../assets/habitats/Animals/ursoP.jpg"),
    },
    {
      id: 2,
      name: "Habitat 2",
      image: require("../../../assets/habitats/Animals/pinguin1.jpg"),
      backgroundColor: "#D9EAF3",
    },
    {
      id: 3,
      name: "Habitat 3",
      image: require("../../../assets/habitats/Animals/raposa.jpg"),
      backgroundColor: "#D9EAF3",
    },
    {
      id: 4,
      name: "Habitat 4",
      image: require("../../../assets/habitats/Animals/leao2.jpg"),
      backgroundColor: "#D9EAF3",
    },
    {
      id: 5,
      name: "Habitat 5",
      backgroundColor: "#D9EAF3",
      image: require("../../../assets/habitats/Animals/focaR.png"),
    },
  ];

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => {
        setSelectedItem(item);
        setModalVisible(true);
      }}>
      <View
        style={[
          styleHabitat.fundoHabitat,
          { backgroundColor: item.backgroundColor },
        ]}>
        <View key={item.id} style={styleHabitat.habitat}>
          <Image source={item.image} style={styleHabitat.habitatImage} />
          {/* <Text style={styleHabitat.nomeHabitat}>{item.name}</Text> */}
        </View>
      </View>
    </Pressable>
  );

  return (
    <SafeAreaView style={styleHabitat.container}>
      <View style={styleHabitat.header}>
        <Pressable style={styleHabitat.backBtn} onPress={goHome}>
          <Ionicons name="arrow-back-outline" size={30} color="black" />
        </Pressable>
      </View>
      <View style={styleHabitat.habitatsContainer}>
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
        <View style={styleHabitat.modalContainer}>
          {selectedItem && (
            <View
              style={[
                styleHabitat.modalImageCont,
                { backgroundColor: selectedItem.backgroundColor },
              ]}>
              <Image
                source={selectedItem.image}
                style={styleHabitat.modalImage}
              />
              <View style={styleHabitat.modalDetails}>
                <Text style={styleHabitat.detailTitle}>{animalDetails[selectedItem.id].name}</Text>

                <Text style={styleHabitat.detailTitle}>Hábitos:</Text>
                <Text style={styleHabitat.detailText}>{animalDetails[selectedItem.id].habits}</Text>

                <Text style={styleHabitat.detailTitle}>Reprodução:</Text>
                <Text style={styleHabitat.detailText}>{animalDetails[selectedItem.id].reproduction}</Text>

                <Text style={styleHabitat.detailTitle}>Habitat:</Text>
                <Text style={styleHabitat.detailText}>{animalDetails[selectedItem.id].habitat}</Text>

                <Text style={styleHabitat.detailTitle}>Peso:</Text>
                <Text style={styleHabitat.detailText}>{animalDetails[selectedItem.id].weight}</Text>

                <Text style={styleHabitat.detailTitle}>Classe:</Text>
                <Text style={styleHabitat.detailText}>{animalDetails[selectedItem.id].class}</Text>
              </View>
            </View>
          )}

          <Pressable onPress={() => setModalVisible(false)}>
            <Text style={styleHabitat.closeButton}>Voltar</Text>
          </Pressable>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
