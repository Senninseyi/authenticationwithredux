import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { Homescreen } from "../../screen/Homescreen";
import { Loginscreen } from "../../screen/Loginscreen";
import { Profilescreen } from "../../screen/Profilescreen";

const Tab = createBottomTabNavigator();
function BottomNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Homescreen} />
      <Tab.Screen name="Profile" component={Profilescreen} />
    </Tab.Navigator>
  );
}

export function AppNavigation() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Root"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Root" component={BottomNavigation} />
        <Stack.Screen name="Login" component={Loginscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
