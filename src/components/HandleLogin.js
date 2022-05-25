import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Alert, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HandleLocation from 'C:\\00 TFG EXPO\\tfg\\src\\components\\Locations.js';
import * as SecureStore from 'expo-secure-store';

import { useAuthentication } from 'C:\\00 TFG EXPO\\tfg\\src\\components\\AuthenticationProvider.js'


export async function handleLogin(username, password, navigation, location) {
  const { isLogged, setIsLogged } = useAuthentication();
    try {
      console.log("Justo antes de hacer la llamada")
      const responsive = await fetch(`https://apiexpress-heroku.herokuapp.com/login/${username}/${password}`, {
        method: "GET"
      })
      .then(responsive => responsive.json())
      console.log(responsive.login)
      if(responsive.login == null) {
        // console.log("La query no ha devuelto nada") //No se han devuelvo datos. Error en el login
        console.log("Error en el usuario o contraseña")  
        Alert.alert(
          "Error while Login",
          "Invalid username or password"
        )
      } else {
        // console.log(responsive.loginIn.rows[0])
        // console.log(responsive.token)
        if(responsive.login.username != null) {
          console.log("Login correcto")
          const token = await SecureStore.getItemAsync('secure_token')
          if(token == null) {
            console.log("El token se borro correctamente, introducimos el nuevo")
            await SecureStore.setItemAsync('secure_token', responsive.token)
            const token = await SecureStore.getItemAsync('secure_token')
            console.log("El tooken del usuario es: " + token)
          }else {
            console.log("El log existe en el dispositivo, se borra y guardamos el nuevo")
            SecureStore.deleteItemAsync('secure_token')
            await SecureStore.setItemAsync('secure_token', responsive.token)
            setIsLogged(true)
            // const token = await SecureStore.getItemAsync('secure_token')
            // console.log("El tooken del usuario es: " + token)
          }
          
          
          // navigation.navigate("Map")
          
          // console.log("La ubicacion del usuario es: ")
          // console.log(location)
        }
      }
    } catch (err) {
      Alert.alert(
        "Error while Login",
        "Invalid username or password"
      )
      console.log("Usuario o contraseña incorrectos")
    }
}