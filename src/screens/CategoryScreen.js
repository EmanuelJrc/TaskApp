import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  Text,
} from "react-native";

const CategoryScreen = ({ route }) => {
  const { category } = route.params;
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState(category.tasks);

  const addTask = () => {
    if (taskName.trim() !== "") {
      setTasks([...tasks, taskName]);
      setTaskName("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.categoryName}>{category.name}</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.task}>{item}</Text>}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add Task"
          value={taskName}
          onChangeText={setTaskName}
        />
        <Button title="Add" onPress={addTask} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  categoryName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  task: {
    fontSize: 18,
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
});

export default CategoryScreen;
