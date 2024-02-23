// ReportScreen.js

import React, { useState } from "react";
import { View, Text, Button, FlatList } from "react-native";

const ReportScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([]); // Initialize with an empty array

  // Function to add a new task
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <View>
      {/* Display existing tasks */}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />

      {/* Add Task button */}
      <Button
        title="Add Task"
        onPress={() => navigation.navigate("AddTaskScreen", { addTask })}
      />
    </View>
  );
};

export default ReportScreen;
