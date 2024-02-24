// CategoryScreen.js
import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CategoryScreen = ({ isVisible, onClose, onAddCategory }) => {
  const [newCategoryName, setNewCategoryName] = useState("");
  const navigation = useNavigation();

  const handleCategoryPress = (category) => {
    navigation.navigate("TaskScreen", { category });
  };

  const addCategory = () => {
    if (newCategoryName.trim() !== "") {
      const newCategory = { name: newCategoryName, tasks: [] };
      onAddCategory(newCategory);
      setNewCategoryName("");
      onClose();
      navigation.navigate("TaskScreen", { category: newCategory });
    }
  };

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TextInput
            style={styles.input}
            placeholder="New Category Name"
            value={newCategoryName}
            onChangeText={setNewCategoryName}
          />
          <Button title="Add Category" onPress={addCategory} />
          <Button title="Cancel" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
});

export default CategoryScreen;
