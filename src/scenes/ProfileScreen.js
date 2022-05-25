import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Button, Alert} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import UserAvatar from 'react-native-user-avatar';
import Loader from 'C:\\00 TFG EXPO\\tfg\\src\\components\\Loader.js';
import * as SecureStore from 'expo-secure-store';
// import { handleLogout } from 'C:\\00 TFG EXPO\\tfg\\src\\components\\HandleLogout.js';
import { ModifyProfile } from 'C:\\00 TFG EXPO\\tfg\\src\\components\\ModifyProfile.js';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { useAuthentication } from 'C:\\00 TFG EXPO\\tfg\\src\\components\\AuthenticationProvider.js'



function handleLogout() {
  const { isLogged, setIsLogged } = useAuthentication();
  
    console.log("Llego al HandleLogout")
    SecureStore.deleteItemAsync('secure_token')
    setIsLogged(false)

}


export default function ProfileScreen() {
  const { isLogged, setIsLogged } = useAuthentication();
  const [username, setUsername] = React.useState(null);
  const [name, setName] = React.useState(null);
  const [second_name, setSecond_name] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  const [newusername, setNewuser] = React.useState(null);
  const [newname, setNewname] = React.useState(null);
  const [newsecond_name, setNewsecond_name] = React.useState(null);
  const [newemail, setNewemail] = React.useState(null);
  const [newpassword, setNewpassword] = React.useState(null);

  const navigation = useNavigation();

  const [token, setToken] = React.useState(null);
  // const [fullname, setFullname] = React.useState(null);

  const handleLogout = () => {
    console.log("Llego al HandleLogout")
    SecureStore.deleteItemAsync('secure_token')
    setIsLogged(false)
  }
  const SecondName = "Second" + "\n" + "Name"

  useEffect(() => {
    (async () => {
      let  token = await SecureStore.getItemAsync('secure_token')
      console.log("El tooken del usuario es: " + token)
      const responsive = await fetch("https://apiexpress-heroku.herokuapp.com/profile", {
        method: "GET",
        headers: {
          'token': token
        }
      })
      .then(responsive => responsive.json())
      // console.log(responsive)
      setUsername(responsive.username)
      setName(responsive.name)
      setSecond_name(responsive.second_name)
      setEmail(responsive.email)
      setPassword(responsive.pasword)
      //Llamar a la api para sacar los datos de usuario
      // let  token = await SecureStore.getItemAsync('secure_token')
      // console.log("El tooken del usuario es: " + token)
    })();
  }, []);

  return (
    <>
    {username === null? (
       <Loader/>
    ) :(
      <View style={{flex: 1, backgroundColor: '#8BC1FF '}}> 

        <View style={{backgroundColor: '#BEE4FF' }}>
          <TouchableOpacity style={styles.logoutBtn} onPress={() => handleLogout()}>
            <Text >Logout</Text>
          </TouchableOpacity>
          <UserAvatar style={{marginTop: "2%", alignItems: 'center', marginLeft: '37%', marginRight: '37%'}} size={100} name={username} />

          <View style={{alignItems: 'center', marginTop: '3%'}}>
            <Text style={styles.textview}>{username}</Text>
            <Text style={{fontSize: 20, marginBottom: 10}}>{name + " " + second_name}</Text>
          </View>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />
        </View>
        <View style={{backgroundColor: '#E7F5FF'}}> 
          <ScrollView style={styles.scrollView}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.textContainer}>Username</Text>
              <TextInput
                style={styles.inputView}
                onChangeText={newText => setNewuser(newText)}
                defaultValue={username}
              />
            </View>

            <View style={{alignItems: 'center'}}>
              <Text style={styles.textContainer}>Name</Text>
              <TextInput
                style={styles.inputView}
                onChangeText={newText => setNewname(newText)}
                defaultValue={name}
              />
            </View>

            <View style={{alignItems: 'center'}}>
              <Text style={styles.textContainer}>Second name</Text>
              <TextInput
                style={styles.inputView}
                onChangeText={newText => setNewsecond_name(newText)}
                defaultValue={second_name}
              />
            </View>

            <View style={{alignItems: 'center'}}>
              <Text style={styles.textContainer}>Email</Text>
              <TextInput
                style={styles.inputView}
                onChangeText={newText => setNewemail(newText)}
                defaultValue={email}
              />
            </View>

            <View style={{alignItems: 'center'}}>
              <Text style={styles.textContainer}>Password</Text>
              <TextInput
                secureTextEntry
                style={styles.inputView}
                onChangeText={newText => setNewpassword(newText)}
                defaultValue={password}
              />
            </View>
        

            <TouchableOpacity style={styles.loginBtn} >
              <Text style={styles.loginText} >SAVE CHANGES</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.deleteBtn} >
              <Text style={styles.deleteText} >DELETE ACCOUNT</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    )}
    </>
  );
}



// onPress={() => ModifyProfile(
  // username, newusername, name, newname, second_name, newsecond_name, email, newemail, password, newpassword)}

// , marginRight: '5%', marginLeft: "5%"

// onPress={() => handleLogin(
//   username, password, navigation, userLocation)}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    marginTop: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView:{
    // marginRight: '10%',
    width:"70%",
    backgroundColor:"#D5E7F4",
    borderRadius:25,
    height:40,
    // justifyContent:"center",
    padding:5,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: "center",
    textAlign: 'center'
    
  },
  inputText:{
    height:60,
    color:"black"
  },
  textContainer: {
    fontSize: 20, 
    fontWeight: "300", 
    marginTop:10,
    marginRight: "5%",
    justifyContent: "center"
  },
  textview: {
    fontSize:30,
    flexDirection: 'row',
  },
  statsContainer: {
    flexDirection: "row",
    marginTop: 25,
    marginRight: "10%",
    marginLeft: "5%"
    },
  loginBtn:{
    width:"80%",
    backgroundColor:"#4071BD",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:15,
    marginLeft: '10%',
    marginRight: '10%',
    marginBottom:10
  },
  logoutBtn: {
    marginTop: 45,
    marginBottom: 5,
    marginLeft: '80%',
    backgroundColor: '#8ACFFF',
    borderRadius: 10,
    width: '15%',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#3992F6'
  },
  deleteBtn: {
    width:"80%",
    backgroundColor:"#FC314D",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:10,
    marginLeft: '10%',
    marginRight: '10%',
    marginBottom:10,
  },
  deleteText: {
    color:"black"
  },
  loginText:{
    color:"#4FBDC1"
  },
  scrollView: {
    marginHorizontal: 20,
    marginBottom: 5,
  },
});