import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen"; // Your existing screens
import ReportScreen from "../screens/ReportScreen"; // Your existing screens
import AddTaskScreen from "../screens/AddTaskScreen";
import CustomTabBar from "../navigation/CustomTabBar"; // Your custom tab bar
import CategoryScreen from "../screens/CategoryScreen";
import TaskScreen from "../screens/TaskScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabNavigator = () => {
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

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTab"
        component={MainTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={({ route }) => ({ title: route.params.category.name })}
      />
      <Stack.Screen
        name="TaskScreen"
        component={TaskScreen}
        options={({ route }) => ({ title: route.params.category.name })}
      />
      {/* Add more screens as needed */}
    </Stack.Navigator>
  );
};

export default Navigation;
