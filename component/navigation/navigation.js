import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons";

import {Homescreen} from "../../screen/Homescreen";
import {Loginscreen} from "../../screen/Loginscreen";
import {Profilescreen} from "../../screen/Profilescreen";
import {TouchableWithoutFeedback} from "react-native";

const Tab = createBottomTabNavigator();

function BottomNavigation({navigation}) {
    return (
        <Tab.Navigator screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = focused
                        ? 'ios-home'
                        : 'ios-home-outline';
                } else if (route.name === 'Profile') {
                    iconName = focused ? 'person-circle' : 'person-circle-outline';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color}/>;
            },
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'black',
            headerRight: () => (
                <TouchableWithoutFeedback onPress={() => navigation.navigate("Login")}>
                    <Ionicons name="log-out" size={20} color="red"/>
                </TouchableWithoutFeedback>
            ),
            headerRightContainerStyle: {paddingRight: 25}
        })}>
            <Tab.Screen name="Home" component={Homescreen}/>
            <Tab.Screen name="Profile" component={Profilescreen}/>
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
                <Stack.Screen name="Root" component={BottomNavigation}/>
                <Stack.Screen name="Login" component={Loginscreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
