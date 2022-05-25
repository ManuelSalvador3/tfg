import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { ModifyProfile } from 'C:\\00 TFG EXPO\\tfg\\src\\components\\ModifyProfile.js'


function handleClick(firstname, second, username, password, email, navigation) {
   

    console.log("Llego a la funcion")
    console.log(firstname, second, username, password, email)
    fetch("https://apiexpress-heroku.herokuapp.com/registering", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body:JSON.stringify({
        name: firstname,
        second_name: second,
        username: username,
        password: password,
        email: email   
      })
    })
    .then(response => response.json())
    // .then(response => {
    //   console.lo)
    // })
    .then(() => navigation.navigate('Login'))
    .catch(err => {
      console.log(err)
    })
}

export default function RegisterSreen() {
    const [firstname, onChangeText1] = React.useState('');
    const [second_name, onChangeText2] = React.useState('');
    const [username, onChangeText3] = React.useState('');
    const [password, onChangeText4] = React.useState('');
    const [email, onChangeText5] = React.useState('');

    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <Text style={styles.logo}>blured</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="First Name" 
            placeholderTextColor="#4FBDC1"
            onChangeText={onChangeText1} value={firstname}/>
        </View>
        <View style={styles.inputView} >
        <TextInput  
            style={styles.inputText}
            placeholder="Second Name" 
            placeholderTextColor="#4FBDC1"
            onChangeText={onChangeText2} value={second_name}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Username" 
            placeholderTextColor="#4FBDC1"
            onChangeText={onChangeText3} value={username}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#4FBDC1"
            onChangeText={onChangeText4} value={password}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email" 
            placeholderTextColor="#4FBDC1"
            onChangeText={onChangeText5} value={email}/>
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={() => handleClick(
            firstname, second_name, username, password, email, navigation
        )}>
          <Text style={styles.loginText}  >REGISTER</Text>
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
        marginTop:40,
        marginBottom:10
      },
      loginText:{
        color:"#4FBDC1"
      }
});

