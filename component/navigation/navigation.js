import React, { useEffect, useState } from "react";
import { TouchableWithoutFeedback } from "react-native";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useReduxDevToolsExtension } from "@react-navigation/devtools";
import { Ionicons } from "@expo/vector-icons";
import * as SecureStore from "expo-secure-store";

import { Homescreen } from "../../screen/Homescreen";
import { Loginscreen } from "../../screen/Loginscreen";
import { Profilescreen } from "../../screen/Profilescreen";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/reducer/auth";
import { primarycolor } from "../../constants/constants";

const Tab = createBottomTabNavigator();

function BottomNavigation() {
  const dispatch = useDispatch();

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
        tabBarActiveTintColor: primarycolor,
        tabBarInactiveTintColor: "black",
        headerRight: () => (
          <TouchableWithoutFeedback onPress={() => dispatch(logoutUser())}>
            <Ionicons name="log-out" size={20} color={primarycolor} />
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
  const { user } = useSelector((state) => ({
    user: state.persisted.user,
  }));

  const navigationRef = useNavigationContainerRef();

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
        {!user?.username == "" ? (
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
