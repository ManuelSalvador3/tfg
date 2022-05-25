import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens

import LoginScreen from 'C:\\00 PRUEBAS\\ManuSalvador_tfg\\src\\scenes\\LoginScreen.js';
import ProfileScreen from 'C:\\00 PRUEBAS\\ManuSalvador_tfg\\src\\scenes\\ProfileScreen.js';
import RegisterScreen from 'C:\\00 PRUEBAS\\ManuSalvador_tfg\\src\\scenes\\RegisterScreen.js';
import MapScreen from 'C:\\00 PRUEBAS\\ManuSalvador_tfg\\src\\scenes\\MapScreen.js';
import HandleLocation from 'C:\\00 PRUEBAS\\ManuSalvador_tfg\\src\\components\\HandleLogin.js';
import Background from 'C:\\00 PRUEBAS\\ManuSalvador_tfg\\src\\scenes\\BackgroundLocation.js';


import BasuraScreen from 'C:\\00 PRUEBAS\\ManuSalvador_tfg\\src\\scenes\\Basura.js';

//Screen names
const Profile = "Home";
const Basura = "Details";
const settingsName = "Settings";

// const Tab = createBottomTabNavigator();

export default function MainContainer() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === detailsName) {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>
            <Tab.Screen name={Profile} component={ProfileScreen} />
            <Tab.Screen name={Basura} component={BasuraScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



// import LoginScreen from './src/scenes/LoginScreen';
// import ProfileScreen from './src/scenes/ProfileScreen';
// import RegisterScreen from './src/scenes/RegisterScreen';
// import MapScreen from './src/scenes/MapScreen';
// import HandleLocation from './src/components/Locations';
// import Background from './src/scenes/BackgroundLocation';