// HomeScreen.js
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CategoryScreen from "../screens/CategoryScreen";
import TaskList from "../components/TaskList";

const HomeScreen = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [categories, setCategories] = useState([]);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const addCategory = (newCategory) => {
    setCategories([...categories, newCategory]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Lists</Text>
      <TaskList
        categories={categories}
        navigation={navigation}
        toggleModal={toggleModal} // Pass the toggleModal function here
      />

      {/* Category addition modal */}
      <CategoryScreen
        isVisible={isModalVisible}
        onClose={toggleModal}
        onAddCategory={addCategory}
        navigation={navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start", // Align items to the left
    padding: 10,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 30,
    marginLeft: 5,
    marginTop: 50,
  },
});

export default HomeScreen;
