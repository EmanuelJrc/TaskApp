import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TaskScreen = ({ navigation, route }) => {
  const { category } = route.params;
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([]);

  // Get tasks from AsyncStorage
  useEffect(() => {
    const loadTasks = async () => {
      try {
        const savedTasks = await AsyncStorage.getItem(category.name);
        if (savedTasks !== null) {
          setTasks(JSON.parse(savedTasks));
        }
      } catch (error) {
        console.error("Error loading tasks: ", error);
      }
    };

    loadTasks();
  }, [category.name]);

  // Save tasks to AsyncStorage
  useEffect(() => {
    const saveTasks = async () => {
      try {
        await AsyncStorage.setItem(category.name, JSON.stringify(tasks));
      } catch (error) {
        console.error("Error saving tasks: ", error);
      }
    };

    saveTasks();
  }, [category.name, tasks]);

  const addTask = () => {
    if (taskName.trim() !== "") {
      setTasks([...tasks, taskName]);
      setTaskName("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.categoryTitle}>{category.name}</Text>
      {/* Display existing tasks */}
      {tasks.map((task, index) => (
        <Text key={index}>{task}</Text>
      ))}
      {/* Input for adding new task */}
      <TextInput
        style={styles.input}
        placeholder="New Task Name"
        value={taskName}
        onChangeText={setTaskName}
      />
      {/* Button to add new task */}
      <Button title="Add Task" onPress={addTask} />
      {/* Button to navigate back */}
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
  },
});

export default TaskScreen;
