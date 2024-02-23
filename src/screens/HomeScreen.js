import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
  Modal,
  FlatList,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CategoryScreen from "../screens/CategoryScreen";

const HomeScreen = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState("add");
  const [newCategoryName, setNewCategoryName] = useState("");
  const [categories, setCategories] = useState([]);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const addCategory = () => {
    if (newCategoryName.trim() !== "") {
      setCategories([
        ...categories,
        {
          id: Date.now(),
          name: newCategoryName,
          icon: selectedIcon,
          tasks: [],
        },
      ]);
      setNewCategoryName("");
      setSelectedIcon("add"); // Reset the icon selection
      setIsModalVisible(false);
    }
  };

  const renderCategory = ({ item, index }) => {
    if (index === categories.length) {
      // Render empty box as the last item in the list
      return (
        <TouchableOpacity style={styles.categorySquare} onPress={toggleModal}>
          <Ionicons name={selectedIcon} size={40} color="gray" />
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        style={styles.categorySquare}
        onPress={() =>
          navigation.navigate("CategoryScreen", { category: item })
        }
      >
        <Ionicons name={item.icon} size={40} color="gray" />
        <Text style={styles.categoryName}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  // Icon options for selection
  const iconOptions = [
    { name: "add" },
    { name: "basketball" },
    { name: "beer" },
    { name: "bicycle" },
    { name: "book" },
    { name: "brush" },
    // Add more icons as needed
  ];

  // Determine if scrolling should be enabled based on the number of categories
  const scrollEnabled = categories.length > 4;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Lists</Text>
      {/* Render existing categories and empty box */}
      <FlatList
        data={[...categories, null]} // Add a null item to represent the empty box
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          if (index === categories.length) {
            // Render empty box as the last item in the list
            return (
              <TouchableOpacity
                style={styles.emptyCategorySquare} // Apply the empty box style here
                onPress={toggleModal}
              >
                <Ionicons name="add" size={40} color="gray" />
              </TouchableOpacity>
            );
          }
          return (
            <TouchableOpacity
              style={styles.categorySquare}
              onPress={() =>
                navigation.navigate("CategoryScreen", { category: item })
              }
            >
              <Text style={styles.categoryName}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
        contentContainerStyle={styles.categoryList}
        horizontal={false}
        numColumns={2}
        scrollEnabled={scrollEnabled}
      />

      {/* Modal */}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholder="New Category Name"
              value={newCategoryName}
              onChangeText={setNewCategoryName}
            />
            {/* Icon selection */}
            <View style={styles.iconSelection}>
              {iconOptions.map((icon, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => setSelectedIcon(icon.name)}
                  style={[
                    styles.iconOption,
                    selectedIcon === icon.name && styles.selectedIconOption,
                  ]}
                >
                  <Ionicons
                    name={icon.name}
                    size={30}
                    color={selectedIcon === icon.name ? "blue" : "gray"}
                  />
                </TouchableOpacity>
              ))}
            </View>
            <Button title="Add Category" onPress={addCategory} />
            <Button title="Cancel" onPress={toggleModal} />
          </View>
        </View>
      </Modal>
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
  categoryList: {
    flexGrow: 1,
    alignSelf: "flex-start", // Align the list to the left
    marginRight: 40, // Add right margin
  },
  categorySquare: {
    width: 180,
    height: 190,
    backgroundColor: "lightblue",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5, // Adjust vertical margin
    marginRight: 20, // Add right margin
  },
  categoryName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  emptyCategorySquare: {
    width: 180,
    height: 190,
    borderRadius: 10,
    borderColor: "rgba(192, 192, 192, 0.5)", // Transparent gray border
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5, // Adjust vertical margin
    marginRight: 20, // Add right margin
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  input: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
  },
  iconSelection: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  iconOption: {
    padding: 5,
  },
  selectedIconOption: {
    backgroundColor: "lightgray",
    borderRadius: 5,
  },
});

export default HomeScreen;
