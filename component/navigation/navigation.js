import React, { useEffect, useState } from "react";
import { TouchableWithoutFeedback } from "react-native";
import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useReduxDevToolsExtension } from '@react-navigation/devtools';
import { Ionicons } from "@expo/vector-icons";
import * as SecureStore from "expo-secure-store";

import { Homescreen } from "../../screen/Homescreen";
import { Loginscreen } from "../../screen/Loginscreen";
import { Profilescreen } from "../../screen/Profilescreen";

const Tab = createBottomTabNavigator();

function BottomNavigation({ navigation, route }) {
  const Signout = async () => {
    let user = await SecureStore.deleteItemAsync("user");
    console.log(user);
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person-circle" : "person-circle-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "black",
        headerRight: () => (
          <TouchableWithoutFeedback onPress={() => Signout()}>
            <Ionicons name="log-out" size={20} color="red" />
          </TouchableWithoutFeedback>
        ),
        headerRightContainerStyle: { paddingRight: 25 },
      })}
    >
      <Tab.Screen name="Home" component={Homescreen} />
      <Tab.Screen name="Profile" component={Profilescreen} />
    </Tab.Navigator>
  );
}

export function AppNavigation() {
  const [userToken, setUserToken] = useState(null);

  const navigationRef = useNavigationContainerRef();

  useReduxDevToolsExtension(navigationRef)

  const getUser = async () => {
    let user = await SecureStore.getItemAsync("user");

    if (user) {
      console.log("🔐 Here's your value 🔐 \n" + user);
      setUserToken(user);
    } else {
      console.log("No values stored under that key.");
    }
  };

  console.log(typeof userToken);

  useEffect(() => {
    getUser();
  }, []);

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="Root"
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}
      >
        {!userToken == "" ? (
          <>
            <Stack.Screen name="Root" component={BottomNavigation} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Loginscreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
