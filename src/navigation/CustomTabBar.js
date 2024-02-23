// CustomTabBar.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Use your preferred icon library

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel || route.name;
        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => navigation.navigate(route.name)}
            style={styles.tabItem}
          >
            {label === "AddTask" ? (
              <View style={styles.addTaskIconContainer}>
                <Ionicons
                  name="add-circle"
                  size={90} // Adjust as needed for the size of the container
                  color="blue"
                  style={styles.addTaskIcon}
                />
              </View>
            ) : (
              <Ionicons
                name={
                  label === "Home"
                    ? "home"
                    : label === "Report"
                    ? "ellipsis-horizontal"
                    : "ellipsis-horizontal"
                }
                size={24}
                color={index === state.index ? "gray" : "gray"}
              />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white", // Customize the background color
    height: 80,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
  },
  addTaskIconContainer: {
    justifyContent: "flex-start", // Align the icon to the top within the container
    alignItems: "center",
    width: 120, // Adjust as needed for the size of the container
    height: 160, // Adjust as needed for the size of the container
    borderRadius: 60, // Adjust as needed for the size of the container
    backgroundColor: "transparent", // Customize the background color
    elevation: 8, // Increase the elevation for a stronger sense of elevation
  },
  addTaskIcon: {
    textShadowColor: "rgba(0, 0, 0, 0.2)", // Add a slight shadow for emphasis
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 2,
  },
});

export default CustomTabBar;
