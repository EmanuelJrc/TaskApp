// Navigation.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen"; // Your existing screens
import ReportScreen from "../screens/ReportScreen"; // Your existing screens
import AddTaskScreen from "../screens/AddTaskScreen";
import CustomTabBar from "../navigation/CustomTabBar"; // Your custom tab bar

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarLabel: "", headerShown: false }}
      />
      <Tab.Screen name="AddTask" component={AddTaskScreen} />
      <Tab.Screen name="Report" component={ReportScreen} />
      {/* Add more screens as needed */}
    </Tab.Navigator>
  );
};

export default Navigation;
