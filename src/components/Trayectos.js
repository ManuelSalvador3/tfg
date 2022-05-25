import React, {useEffect, useState,  useContext} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Alert, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HandleLocation from 'C:\\00 TFG EXPO\\tfg\\src\\components\\Locations.js';
import * as SecureStore from 'expo-secure-store';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import { useAuthentication } from 'C:\\00 TFG EXPO\\tfg\\src\\components\\AuthenticationProvider.js'
import Loader from 'C:\\00 TFG EXPO\\tfg\\src\\components\\Loader.js';

import geolib from 'geolib';


export default function Trayectos() {
    const [coords, setCoords] = React.useState(null)
    useEffect(() => {
        (async () => {
            let  token = await SecureStore.getItemAsync('secure_token')
            console.log("El tooken del usuario es: " + token)
            const responsive = await fetch("https://apiexpress-heroku.herokuapp.com/userCoords", {
                method: "GET",
                headers: {
                'token': token
                }
            })
            .then(responsive => responsive.json())
            console.log(responsive[0])
            setCoords(responsive)
            //Llamar a la api para sacar los datos de usuario
            // let  token = await SecureStore.getItemAsync('secure_token')
            // console.log("El tooken del usuario es: " + token)
        })();
      }, []);
    const getTrayectos = async() => {
        //Cogemos dos trayectos y miramos la distancia 
        const dist = geolib.getDistance(
            { latitude, longitude },
            { latitude: item.LatL, longitude: item.Long2 }
          );
    }
    return (
        <>
            {coords ? (
                <View alignItems='center'>
                    <Text alignItems='center'>Hola</Text>
                </View>
               
            ) : (
                <Loader/>
            ) 
        }
        </>

    );

}   