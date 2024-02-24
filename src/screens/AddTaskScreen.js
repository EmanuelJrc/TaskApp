// AddTaskScreen.js
import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const AddTaskScreen = () => {
  const [taskName, setTaskName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleAddTask = () => {
    // Implement logic to add task to selected category
    console.log("Adding task:", taskName, "to category:", selectedCategory);
    // Reset task name and selected category
    setTaskName("");
    setSelectedCategory(null);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Task Name"
        value={taskName}
        onChangeText={setTaskName}
      />
      {/* Implement logic to choose category */}
      <Button title="Choose Category" onPress={() => {}} />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  input: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 5,
    padding: 10,
    width: "100%",
  },
});

export default AddTaskScreen;
