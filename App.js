import React, {useEffect, useState , useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';

import AuthenticationProvider from 'C:\\00 TFG EXPO\\tfg\\src\\components\\AuthenticationProvider.js'
import { useAuthentication } from 'C:\\00 TFG EXPO\\tfg\\src\\components\\AuthenticationProvider.js'

// Screens

import LoginScreen from 'C:\\00 TFG EXPO\\tfg\\src\\scenes\\LoginScreen.js';
import ProfileScreen from 'C:\\00 TFG EXPO\\tfg\\src\\scenes\\ProfileScreen.js';
import RegisterScreen from 'C:\\00 TFG EXPO\\tfg\\src\\scenes\\RegisterScreen.js';
import MapScreen from 'C:\\00 TFG EXPO\\tfg\\src\\scenes\\MapScreen.js';
import HandleLocation from 'C:\\00 TFG EXPO\\tfg\\src\\components\\HandleLogin.js';
import Background from 'C:\\00 TFG EXPO\\tfg\\src\\scenes\\BackgroundLocation.js';

import Loader from 'C:\\00 TFG EXPO\\tfg\\src\\components\\Loader.js';

import MainScreen from 'C:\\00 TFG EXPO\\tfg\\src\\scenes\\MainScreen.js';

import * as Location from 'expo-location';
import * as SecureStore from 'expo-secure-store';

// const Stack = createStackNavigator();

import Test from 'C:\\00 TFG EXPO\\tfg\\src\\components\\Test.js'

export default function App({navigation}) {
  // const { isLogged, setIsLogged } = useAuthentication();
  // const [isLoading, setItsLoading] = React.useState(true);
  // const [token, setToken] = React.useState(null);
  // const AuthContext = createContext({});

  // if(!token) {
  //   return <Loader/>
  // }

  // React.useEffect(() => {
  //   (async () => {
  //     // if(token == null) {
  //     //   setLogged(false)
  //     //   console.log("User not registered App.js")
  //     // }else {
  //     //   setLogged(true)
  //     //   setItsLoading(false)
  //     // }
  //     // console.log(isLogged)
  //     // console.log("User registered with token: " + token)
  //   })();
  // }, [])

  return (
    <AuthenticationProvider>
        <Test/>
    </AuthenticationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
{/*screenOptions={{headerShown: false}} */}



{/* <NavigationContainer>
       <Stack.Navigator screenOptions={{headerShown: false}}> 
        
       <Stack.Screen name="Nav" component={NavBar} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="Location" component={HandleLocation} />
        
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="back" component={Background} />

      </Stack.Navigator>
    </NavigationContainer> */}





    // const screenOptions = {
    //   tabBarStyle:{
    //     backgroundColor:'#0000ff',
    //     height:100,
    //   },
    //   tabBarItemStyle:{
    //     backgroundColor:'#00ff00',
    //     margin:5,
    //     borderRadius:10,
    //   }




    // barStyle={{ backgroundColor: '#003f5c', width:'90%', display: 'flex', justifyContent: 'center'}}




    // <NavigationContainer>
    // <Tab.Navigator
    //     initialRouteName={Loader}
    //     screenOptions={ ({ route }) => ({
    //       headerShown: false,
    //       tabBarStyle:{
    //         flex: 1,
    //         paddingVertical: 5,
    //         position:'absolute',
    //         borderTopLeftRadius:15,
    //         width: '90%',
    //         marginLeft: '5%',
    //         marginRight: '5%',
    //         marginBottom: '2%',
    //         borderRadius: 10,
    //         backgroundColor:'#61B6F4',
    //         alignItems: 'center',
    //         justifyContent: 'center',
    //         height:50
            
    //       },
    //       tabBarIcon: ({ focused, color, size }) => {
    //         let iconName;
    //         let rn = route.name;

    //         if (rn === Profile) {
    //           iconName = focused ? 'person' : 'person-outline';

    //         } else if (rn === Map) {
    //           iconName = focused ? 'map' : 'map-outline';

    //         } else if (rn === Login) {
    //           iconName = focused ? 'list' : 'person-outline';

    //         } 
    //         else if (rn === Main) {
    //           iconName = focused ? 'home' : 'home-outline';

    //         } 
    //         // iconName = focused ? 'home' : 'home-outline';
    //         // You can return any component that you like here!
    //         return <Ionicons name={iconName} size={size} color={color} />
    //       },
    //     })}
    //     tabBarOptions={{
    //       activeTintColor: '#E649F0',
    //       inactiveTintColor: 'white',
    //       labelStyle: { paddingBottom: 5, fontSize: 10 },
    //       style: { 
    //         padding: 10, 
    //         height: 50,
    //       }
    //     }}
        
    //     > 
    //       <Tab.Screen name={Register} component={RegisterScreen} />
    //       <Tab.Screen name={BackgroundLocation} component={Background} /> 
    //       <Tab.Screen name={Main} component={MainScreen} />
    //       <Tab.Screen name={Map} component={MapScreen} />
    //       <Tab.Screen name={Profile} component={ProfileScreen}/>
    //       <Tab.Screen name={Login} component={LoginScreen} options={{
    //       // hide the bottom tab bar on Contact Screen
    //       tabBarStyle: { display: "none" }}}/>
            
    //   </Tab.Navigator>
    
    // </NavigationContainer>


















    // <>
    //   {isLogged ? (
    //   <NavigationContainer>
    //     <Tab.Navigator
    //       initialRouteName={Loader}
    //       screenOptions={ ({ route }) => ({
    //         headerShown: false,
    //         tabBarStyle:{
    //           flex: 1,
    //           paddingVertical: 5,
    //           position:'absolute',
    //           borderTopLeftRadius:15,
    //           width: '90%',
    //           marginLeft: '5%',
    //           marginRight: '5%',
    //           marginBottom: '2%',
    //           borderRadius: 10,
    //           backgroundColor:'#61B6F4',
    //           alignItems: 'center',
    //           justifyContent: 'center',
    //           height:50
              
    //         },
    //         tabBarIcon: ({ focused, color, size }) => {
    //           let iconName;
    //           let rn = route.name;

    //           if (rn === Profile) {
    //             iconName = focused ? 'person' : 'person-outline';

    //           } else if (rn === Map) {
    //             iconName = focused ? 'map' : 'map-outline';

    //           } else if (rn === Login) {
    //             iconName = focused ? 'list' : 'person-outline';

    //           } 
    //           else if (rn === Main) {
    //             iconName = focused ? 'home' : 'home-outline';

    //           } 
    //           // iconName = focused ? 'home' : 'home-outline';
    //           // You can return any component that you like here!
    //           return <Ionicons name={iconName} size={size} color={color} />
    //         },
    //       })}
    //       tabBarOptions={{
    //         activeTintColor: '#E649F0',
    //         inactiveTintColor: 'white',
    //         labelStyle: { paddingBottom: 5, fontSize: 10 },
    //         style: { 
    //           padding: 10, 
    //           height: 50,
    //         }
    //       }}
          
    //       > 
    //         {/* <Tab.Screen name={Register} component={RegisterScreen} />
    //         <Tab.Screen name={BackgroundLocation} component={Background} />  */}
    //         <Tab.Screen name={Main} component={MainScreen} />
    //         <Tab.Screen name={Map} component={MapScreen} />
    //         <Tab.Screen name={Profile} component={ProfileScreen}/>
    //         {/* <Tab.Screen name={Login} component={LoginScreen} options={{
    //         // hide the bottom tab bar on Contact Screen
    //         tabBarStyle: { display: "none" }}}/> */}
              
    //     </Tab.Navigator>
    //   </NavigationContainer>
    //   ) : (
    //     <NavigationContainer>
    //     <Tab.Navigator
    //       initialRouteName={Loader}
    //       screenOptions={ ({ route }) => ({
    //         headerShown: false,
    //         tabBarStyle:{
    //           flex: 1,
    //           paddingVertical: 5,
    //           position:'absolute',
    //           borderTopLeftRadius:15,
    //           width: '90%',
    //           marginLeft: '5%',
    //           marginRight: '5%',
    //           marginBottom: '2%',
    //           borderRadius: 10,
    //           backgroundColor:'#61B6F4',
    //           alignItems: 'center',
    //           justifyContent: 'center',
    //           height:50
              
    //         },
    //         tabBarIcon: ({ focused, color, size }) => {
    //           let iconName;
    //           let rn = route.name;

    //           if (rn === Profile) {
    //             iconName = focused ? 'person' : 'person-outline';

    //           } else if (rn === Map) {
    //             iconName = focused ? 'map' : 'map-outline';

    //           } else if (rn === Login) {
    //             iconName = focused ? 'list' : 'person-outline';

    //           } 
    //           else if (rn === Main) {
    //             iconName = focused ? 'home' : 'home-outline';

    //           } 
    //           // iconName = focused ? 'home' : 'home-outline';
    //           // You can return any component that you like here!
    //           return <Ionicons name={iconName} size={size} color={color} />
    //         },
    //       })}
    //       tabBarOptions={{
    //         activeTintColor: '#E649F0',
    //         inactiveTintColor: 'white',
    //         labelStyle: { paddingBottom: 5, fontSize: 10 },
    //         style: { 
    //           padding: 10, 
    //           height: 50,
    //         }
    //       }}
          
    //       > 
    //       <Tab.Screen name={Login} component={LoginScreen} options={{
    //       // hide the bottom tab bar on Contact Screen
    //       tabBarStyle: { display: "none" }}}/>
    //       <Tab.Screen name={Register} component={RegisterScreen} />
    //       <Tab.Screen name={BackgroundLocation} component={Background} /> 
                
    //     </Tab.Navigator>
    //     </NavigationContainer>
    //   )}
    //   </>    





    
  // const checkLogin = async() => {
  //   let  token = await SecureStore.getItemAsync('secure_token')
  //   if(token == null) {
  //     console.log("User not registered App.js")
  //   }else {
  //     setLogged(true)
  //   }
  //   console.log(isLogged)
  //   console.log("User registered with token: " + token)
  // };

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       let  token = await SecureStore.getItemAsync('secure_token')
  
  //     } catch (e) {
        
  //     }
  //     let  token = await SecureStore.getItemAsync('secure_token')
  //     if(token == null) {
  //       setLogged(false)
  //       console.log("User not registered App.js")
  //     }else {
  //       setLogged(true)
  //     }
  //     console.log(isLogged)
  //     console.log("User registered with token: " + token)
  //   })();
  // }, []);
