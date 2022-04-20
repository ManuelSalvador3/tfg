import React from 'react'
// import { Router, Stack, Scene, Tabs } from 'react-native-router-flux';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
// rimport Login from './src/screens/login/Login'
import Login from './src/screens/login/Login'
import Register  from './src/screens/login/Register'
import Main from './src/screens/login/Main'
import Profile from './src/screens/login/Profile'
import 'react-native-gesture-handler';


import {Router, Scene} from 'react-native-router-flux';
// import Register from './src/screens/login/Register';
// import { NavigationContainer } from '@react-navigation/native';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import MapView from 'react-native-maps'

// import the different screens



// create our app's navigation stack

export default class App extends React.Component {
  render(){
    return (
      <Router>
        <Scene key='auth' hideNavBar>
          {/* <Scene key='main' component={Main} tittle='Main'/> */}
          {/* <Scene key='register' component={Register} tittle='Register'/> */}
          <Scene key='login' component={Login} tittle='Login'/>
          
          {/* <Scene key='profile' component={Profile} tittle='Profile'/> */}
        </Scene>
      </Router>
    )
  }
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