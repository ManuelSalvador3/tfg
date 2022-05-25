import React, {useEffect, useState,  useContext} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Alert, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HandleLocation from 'C:\\00 TFG EXPO\\tfg\\src\\components\\Locations.js';
import * as SecureStore from 'expo-secure-store';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import { useAuthentication } from 'C:\\00 TFG EXPO\\tfg\\src\\components\\AuthenticationProvider.js'



export function handleLogout() {
    const { isLogged, setIsLogged } = useAuthentication();
    // const navigation = useNavigation();
    try {
        console.log("Llego al HandleLogout")
        //Borramos el token del dispositivo y llevamos a la pantalla de login
        // const token = await SecureStore.getItemAsync('secure_token')
        // console.log("El tooken del usuario es: " + token)
        SecureStore.deleteItemAsync('secure_token')
        setIsLogged(false)
        // const tokeen = await SecureStore.getItemAsync('secure_token')
        // console.log("El barrado queda con : " + tokeen)
        // navigation.navigate("LoginScreen")
        // navigation.navigate('AuthStackScreen')
        // , { screen: 'Login' }
      

    } catch (err) {
     console.log(err)
    }
}