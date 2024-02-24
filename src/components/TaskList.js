import React from "react";
import { FlatList, StyleSheet, TouchableOpacity, Text } from "react-native";
import TaskItem from "./TaskItem";
import { Ionicons } from "@expo/vector-icons";

const TaskList = ({
  categories,
  navigation,
  toggleModal,
  selectedIcon,
  iconOptions,
  setSelectedIcon,
}) => {
  const scrollEnabled = categories.length > 4;

  return (
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
              navigation.navigate("TaskScreen", { category: item })
            }
          >
            <Ionicons name={item.icon} size={40} color="gray" />
            <Text style={styles.categoryName}>{item.name}</Text>
          </TouchableOpacity>
        );
      }}
      contentContainerStyle={styles.categoryList}
      horizontal={false}
      numColumns={2}
      scrollEnabled={scrollEnabled}
    />
  );
};

const styles = StyleSheet.create({
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
});

export default TaskList;
