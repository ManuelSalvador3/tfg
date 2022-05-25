import React, {useEffect, useState , useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';

import AuthenticationProvider from 'C:\\00 TFG EXPO\\tfg\\src\\components\\AuthenticationProvider.js'
import { useAuthentication } from 'C:\\00 TFG EXPO\\tfg\\src\\components\\AuthenticationProvider.js'

import LoginScreen from 'C:\\00 TFG EXPO\\tfg\\src\\scenes\\LoginScreen.js';
import ProfileScreen from 'C:\\00 TFG EXPO\\tfg\\src\\scenes\\ProfileScreen.js';
import RegisterScreen from 'C:\\00 TFG EXPO\\tfg\\src\\scenes\\RegisterScreen.js';
import MapScreen from 'C:\\00 TFG EXPO\\tfg\\src\\scenes\\MapScreen.js';
import HandleLocation from 'C:\\00 TFG EXPO\\tfg\\src\\components\\HandleLogin.js';
import Background from 'C:\\00 TFG EXPO\\tfg\\src\\scenes\\BackgroundLocation.js';

import Trayectos from 'C:\\00 TFG EXPO\\tfg\\src\\components\\Trayectos.js'

import Loader from 'C:\\00 TFG EXPO\\tfg\\src\\components\\Loader.js';

import MainScreen from 'C:\\00 TFG EXPO\\tfg\\src\\scenes\\MainScreen.js';
import Notificaciones from 'C:\\00 TFG EXPO\\tfg\\src\\components\\Notifications.js';

const Profile = "Profile";
const Main = "Home";
const settingsName = "Settings";
const Login = "Login";
const Map = "Map";
// const Loader = "Loader";
const BackgroundLocation = "Back";
const Register = 'Register'
const Trayecto ='Trayecto'
const Notificacioness = 'Notificaciones'

const MainStack = createBottomTabNavigator();
const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator 
  initialRouteName={Loader}
  screenOptions={ ({ route }) => ({
    headerShown: false,
    tabBarStyle:{
      flex: 1,
      paddingVertical: 5,
      position:'absolute',
      borderTopLeftRadius:15,
      width: '90%',
      marginLeft: '5%',
      marginRight: '5%',
      marginBottom: '2%',
      borderRadius: 10,
      backgroundColor:'#61B6F4',
      alignItems: 'center',
      justifyContent: 'center',
      height:50
      
    },
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      let rn = route.name;

      if (rn === Profile) {
        iconName = focused ? 'person' : 'person-outline';

      } else if (rn === Map) {
        iconName = focused ? 'map' : 'map-outline';

      } else if (rn === Login) {
        iconName = focused ? 'list' : 'person-outline';

      } 
      else if (rn === Main) {
        iconName = focused ? 'home' : 'home-outline';

      } 
      // iconName = focused ? 'home' : 'home-outline';
      // You can return any component that you like here!
      return <Ionicons name={iconName} size={size} color={color} />
    },
  })}
  tabBarOptions={{
    activeTintColor: '#E649F0',
    inactiveTintColor: 'white',
    labelStyle: { paddingBottom: 5, fontSize: 10 },
    style: { 
      padding: 10, 
      height: 50,
    }
  }}
  >
    <AuthStack.Screen name="Login" component={LoginScreen} />
    <AuthStack.Screen name="Register" component={RegisterScreen} />
  </AuthStack.Navigator>
);


const MainStackNavigator = () => (
  // <NavigationContainer>
    <MainStack.Navigator
      initialRouteName={Loader}
      screenOptions={ ({ route }) => ({
        headerShown: false,
        tabBarStyle:{
          flex: 1,
          paddingVertical: 5,
          position:'absolute',
          borderTopLeftRadius:15,
          width: '90%',
          marginLeft: '5%',
          marginRight: '5%',
          marginBottom: '2%',
          borderRadius: 10,
          backgroundColor:'#61B6F4',
          alignItems: 'center',
          justifyContent: 'center',
          height:50
          
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === Profile) {
            iconName = focused ? 'person' : 'person-outline';

          } else if (rn === Map) {
            iconName = focused ? 'map' : 'map-outline';

          } else if (rn === Login) {
            iconName = focused ? 'list' : 'person-outline';

          } 
          else if (rn === Main) {
            iconName = focused ? 'home' : 'home-outline';

          } 
          // iconName = focused ? 'home' : 'home-outline';
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />
        },
      })}
      tabBarOptions={{
        activeTintColor: '#E649F0',
        inactiveTintColor: 'white',
        labelStyle: { paddingBottom: 5, fontSize: 10 },
        style: { 
          padding: 10, 
          height: 50,
        }
      }}
      > 
        {/* <MainStack.Screen name={Register} component={RegisterScreen} />
        <MainStack.Screen name={BackgroundLocation} component={Background} />  */}
        <MainStack.Screen name={Main} component={MainScreen} />
        <MainStack.Screen name={Map} component={MapScreen} />
        <MainStack.Screen name={Profile} component={ProfileScreen}/>
        {/* <MainStack.Screen name={Notificacioness} component={Notificaciones}/> */}
        {/* <MainStack.Screen name={Trayecto} component={Trayectos}/> */}
        {/* <MainStack.Screen name={Login} component={LoginScreen} options={{
        // hide the bottom tab bar on Contact Screen
        tabBarStyle: { display: "none" }}}/> */}
          
    </MainStack.Navigator>
    
    // </NavigationContainer>
)

export default function Test({navigation}) {
    const { isLogged, setIsLogged } = useAuthentication();
    return (
        <NavigationContainer>
            {isLogged ? (
              <MainStackNavigator/>
            ) : (
              <AuthStackScreen/>
            )
                
            }
        </NavigationContainer>
    );
}


