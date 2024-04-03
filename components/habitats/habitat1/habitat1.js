import React, { useState } from "react";
import { Text, View, Image, Pressable, FlatList, Modal, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';

import styleHabitat from "./habitat1Style.js";

export default function HomeScreen({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const goHome = () => {  
        navigation.navigate('Home')
    }
    const habitats = [
        {
            id: 1,
            name: "Habitat 1",
            backgroundColor: "#A9DAED",
            image: require("../../../assets/habitats/Animals/ursoP.jpg"),

          },
          {
            id: 2,
            name: "Habitat 2",
            image: require("../../../assets/habitats/Animals/pinguin1.jpg"),
            backgroundColor: "#A9DAED",
          },
          {
            id: 3,
            name: "Habitat 3",
            image: require("../../../assets/habitats/Animals/raposa.jpg"),
            backgroundColor: "#A9DAED",
          },
          {
            id: 4,
            name: "Habitat 4",
            image: require("../../../assets/habitats/Animals/leao2.jpg"),
            backgroundColor: "#A9DAED",
          },
          {
            id: 5,
            name: "Habitat 5",
            backgroundColor: "#A9DAED",
            image: require("../../../assets/habitats/Animals/focaR.png"),

          },
    ];

    const renderItem = ({ item }) => (
        <Pressable onPress={() => {
            setSelectedItem(item);
            setModalVisible(true);
        }}>
            <View
                style={[
                    styleHabitat.fundoHabitat,
                    { backgroundColor: item.backgroundColor },
                ]}
            >
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
                        <View style={[styleHabitat.modalImageCont, { backgroundColor: selectedItem.backgroundColor }]}>
                            <Image source={selectedItem.image} style={styleHabitat.modalImage} />
                            {/* Outros conteúdos do modal, se necessário */}
                        </View>
                    )}

                    <View>

                    </View>
                    <Pressable onPress={() => setModalVisible(false)}>
                        <Text style={styleHabitat.closeButton}>Voltar</Text>
                    </Pressable>

                </View>
            </Modal>
        </SafeAreaView>
    );
}


