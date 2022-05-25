import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Alert, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HandleLocation from 'C:\\00 TFG EXPO\\tfg\\src\\components\\Locations.js';
import * as SecureStore from 'expo-secure-store';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

export default async function ModifyProfile(username, newusername, name, newname, second_name, newsecond_name, email, newemail, password, newpassword) {
    const navigation = useNavigation();
    try {
        const user = ''
        const Nameuser = ''
        const surname = ''
        const emailAdress = ''
        const constrasema = ''
        //Borramos el token del dispositivo y llevamos a la pantalla de login
        const token = await SecureStore.getItemAsync('secure_token')
        console.log("El tooken del usuario es: " + token)
         //No se ha modificado el texto de usuario 
        if(newusername == null) { user = username }else {user = newusername }
        if(newname == null) { Nameuser = name }else { Nameuser = newname }
        if(newsecond_name == null) { surname = second_name }else { surname = newsecond_name }
        if(newemail == null ){emailAdress = email }else { emailAdress = newemail }
        if(newpassword == null) { constrasema = password } else { constrasema = newpassword}
        console.log(user + Nameuser + surname)
        fetch("https://apiexpress-heroku.herokuapp.com/updateProfile", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                'token': token
            },
            body:JSON.stringify({
                name: Nameuser,
                second_name: surname,
                username: user,
                email: emailAdress,
                password: password 
            })
        })
        .then(response => response.json())
        console.log(response)
    } catch (err) {
        console.log(err)
    }

}