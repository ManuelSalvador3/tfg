import React, {useEffect, useState , useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';

import AuthenticationProvider from 'C:\\00 TFG EXPO\\tfg\\src\\components\\AuthenticationProvider.js'
import { useAuthentication } from 'C:\\00 TFG EXPO\\tfg\\src\\components\\AuthenticationProvider.js'

// Screens

import LoginScreen from 'C:\\00 TFG EXPO\\tfg\\src\\scenes\\LoginScreen.js';
import ProfileScreen from 'C:\\00 TFG EXPO\\tfg\\src\\scenes\\ProfileScreen.js';
import RegisterScreen from 'C:\\00 TFG EXPO\\tfg\\src\\scenes\\RegisterScreen.js';
import MapScreen from 'C:\\00 TFG EXPO\\tfg\\src\\scenes\\MapScreen.js';
import HandleLocation from 'C:\\00 TFG EXPO\\tfg\\src\\components\\HandleLogin.js';
import Background from 'C:\\00 TFG EXPO\\tfg\\src\\scenes\\BackgroundLocation.js';

import Loader from 'C:\\00 TFG EXPO\\tfg\\src\\components\\Loader.js';

import MainScreen from 'C:\\00 TFG EXPO\\tfg\\src\\scenes\\MainScreen.js';

import * as Location from 'expo-location';
import * as SecureStore from 'expo-secure-store';

// const Stack = createStackNavigator();

import Test from 'C:\\00 TFG EXPO\\tfg\\src\\components\\Test.js'

export default function App({navigation}) {
 
  return (
    <AuthenticationProvider>
        <Test/>
    </AuthenticationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

