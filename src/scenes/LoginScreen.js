import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
// import { handleLogin } from 'C:\\00 TFG EXPO\\tfg\\src\\components\\HandleLogin.js';
import * as Location from 'expo-location';
import { useAuthentication } from 'C:\\00 TFG EXPO\\tfg\\src\\components\\AuthenticationProvider.js'
import * as SecureStore from 'expo-secure-store';


export default function LoginScreen() {
    const { isLogged, setIsLogged } = useAuthentication();
    const [username, onChangeUserLogin] = React.useState('');
    const [password, onChangePassLogin] = React.useState('');
    const [userLocation, setLocation] = React.useState();
    const navigation = useNavigation();

    const handleLogin = async() => {
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
            // const token = await SecureStore.getItemAsync('secure_token')
            // if(token == null) {
            await SecureStore.setItemAsync('secure_token', responsive.token)
            //   const token = await SecureStore.getItemAsync('secure_token')
            console.log("El tooken del usuario es: " + responsive.token)
            // }else {
            console.log("El log existe en el dispositivo, se borra y guardamos el nuevo")
            // SecureStore.deleteItemAsync('secure_token')
            // await SecureStore.setItemAsync('secure_token', responsive.token)
            setIsLogged(true)
              // const token = await SecureStore.getItemAsync('secure_token')
              // console.log("El tooken del usuario es: " + token)
            // }
            
            
            // navigation.navigate("Map")
            
            // console.log("La ubicacion del usuario es: ")
            // console.log(location)
          }
        }
      } catch (err) {
        console.log(err)
        Alert.alert(
          "Error while Login",
          "Invalid username or password"
        )
        console.log("Usuario o contraseña incorrectos")
      }
    }

    useEffect(() => {
      (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
              return;
          }
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
          // console.log(location);
      })();
    }, []);



  return (
    <View style={styles.container}>
        <Text style={styles.logo}>blured</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Username..." 
            placeholderTextColor="#4FBDC1"
            onChangeText={onChangeUserLogin} value={username}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#4FBDC1"
            onChangeText={onChangePassLogin} value={password}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={() => handleLogin(
            username, password, navigation, userLocation)}>
          <Text style={styles.loginText} >LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText} onPress={() => navigation.navigate("Register")}>Signup</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
      },
      logo:{
        fontWeight:"bold",
        fontSize:50,
        color:"#9B9C9F",
        marginBottom:40
      },
      inputView:{
        width:"80%",
        backgroundColor:"#465881",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
      },
      inputText:{
        height:60,
        color:"white"
      },
      forgot:{
        color:"white",
        fontSize:12
      },
      loginBtn:{
        width:"80%",
        backgroundColor:"#4071BD",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        marginBottom:10
      },
      loginText:{
        color:"#4FBDC1"
      }
});