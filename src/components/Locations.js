import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

export default async function HandleLocation() {
    const [location, setLocation] = React.useState(null);

    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
    }
    let userlocation = await Location.getCurrentPositionAsync({});
    setLocation(userlocation)
    let text = JSON.stringify(location);
    console.log(text)
    return (text);
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50
    },
});  
//   useEffect(() => {
//     (async () => {
     

//       let 
//     })();
//   }, []);

// let text = 'Waiting..';
//   if (errorMsg) {
//     text = errorMsg;
//   } else if (location) {
    // text = JSON.stringify(location);
//   }