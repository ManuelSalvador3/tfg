import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, Button, FlatList } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Input, Divider } from 'react-native-elements';
const GOOGLE_PLACES_API_KEY = 'YOUR_GOOGLE_API_KEY';
import { handleToken } from 'C:\\00 TFG EXPO\\tfg\\src\\components\\handleToken.js';
import * as Location from 'expo-location';
import Loader from 'C:\\00 TFG EXPO\\tfg\\src\\components\\Loader.js';
import * as SecureStore from 'expo-secure-store';
import { getDistance, getPreciseDistance } from 'geolib';
import LoginScreen from 'C:\\00 TFG EXPO\\tfg\\src\\scenes\\LoginScreen.js';

export default function MainScreen() {

  const [data, setCoords] = React.useState(null);
  const [data2, setdata2] = React.useState(null);
  const myRef = useRef(null);
  const [trayectos, setTrayectos]  = React.useState(null);
  const DATA = Array.from({ length: 100 }, (v, i) => `List item ${i}`);
  const [token, setToken] = React.useState(null);
  const [test, setTest] = React.useState({
    latitude: 40.6135,
    longitude: -3.70897
  });

  useEffect(() => {
    (async () => {
      let  token = await SecureStore.getItemAsync('secure_token')
      setToken(token)
      // console.log("El tooken del usuario es: " + token)
      const responsive = await fetch("https://apiexpress-heroku.herokuapp.com/userTrayectos", {
        method: "GET",
        headers: {
          'token': token
        }
      })
      // console.log(responsive)
      .then(responsive => responsive.json())
      console.log(responsive) //Imprime el individual
      let location = await Location.getCurrentPositionAsync({})
      let address = await Location.reverseGeocodeAsync(location.coords)
      // console.log(address)
      setCoords(responsive)

      // console.log(user_data[0].name)
      // console.log(user)


      // console.log(responsive[0].time_destino)
    })();
  }, []);



  const separator = () => {
    return <Divider orientation="vertical"  size="large"/>;
  };

  const Item = ({ title, origen, destino, tiempo, distance, index }) => {
    var minutes = Math.floor(tiempo / 60000);
    var seconds = ((tiempo % 60000) / 1000).toFixed(0);
    var distancia = (distance / 1000)
    // console.log(distancia)
    return (
      <View style={styles.container2}>
        <Text style={styles.title}>
        {title}  {index}
        </Text>
        <Text style={styles.cuerpo}> {"Origen: " + origen} </Text>
        <Text style={styles.cuerpo}> {"Destino: " + destino} </Text>
        <Text style={styles.cuerpo}> {"Tiempo de trayecto: " + minutes + " : "+ seconds + " mins"} </Text>
        <Text style={styles.cuerpo}> {"Distancia recorrida: " + distancia + " kms"} </Text>
        {/* <Text> {description} </Text> */}
      </View>
    );
  };
 
  const renderItem = ({ item, index }) => (
    <Item origen={item.origen}  destino={item.destino} tiempo={item.totalTime} distance={item.distance} title={"Trayecto"} index={index+1} />
  );

  const header = () => {
    return (
      <View>
        <Text style={styles.header}> Trayectos realizados</Text>
        <Divider orientation="vertical" />
      </View>
    );
  };

  return (
    <>
    {data === null? (
      <Loader/>
    ) : (
      <View style={styles.back}>
        <View style={styles.container}>

        {data && (
          <FlatList
            ListHeaderComponent={header}
            ItemSeparatorComponent={separator}
            data={data}
            renderItem={renderItem}
          />
        )}
        </View>
      </View>
    )}  
  </>
  );
}

const styles = StyleSheet.create({
  back: {
    backgroundColor: "#003f5c",
    flex: 1
  },
  container: {
    width: "100%",
    padding: 16,
    paddingTop: 30,
    backgroundColor: "#D5E7F4",
    marginTop: '5%',
    marginBottom:'20%',
    marginLeft: "5%",
    marginRight: "5%",
    width:"90%",
    borderRadius:10,
  },
  container2: {
    width: "100%",
    padding: 10,
    paddingTop: 5,
    marginBottom: 10,
    marginLeft: "10%",
    marginRight: "10%",
    backgroundColor: "#D5E7F4",
    // alignItems: 'center'
  },
  listItem: {
    backgroundColor: "#A4CEFF",
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 5,
    marginBottom: 10,
    padding: 25,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    alignItems: 'center'
  },
  header: {
    alignItems: 'center',
    flex: 1,
    textAlign: 'center',
    fontSize: 28,
    marginBottom: 10,
    marginTop: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cuerpo: {
    fontSize: 15,
    fontWeight: '500',
  }
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buscador: {
//     marginTop: '40%'
//   }
// });


    // {coords === null? (
    //    <Loader/>
    // ) :(
    //   <View style={styles.container}>
    //      <Text>Hola que tal</Text>
    //     {/* <Text></Text> */}
    //   </View>
    // )}




    // <View style={styles.container}>
    // <Text>Trayectos realizados</Text>
    // <FlatList
    //   ref={myRef}
    //   getItemLayout={(data, index) => ({
    //     length: DATA.length,
    //     offset: DATA.length * index,
    //     index,
    //   })}
    //   keyExtractor={(item, index) => index.toString()}
    //   data={coords}
    //   renderItem={(itemData) => {
    //     return (
    //       <View style={styles.listItem}>
    //         <Text style={styles.text}>{itemData.item}</Text>
    //       </View>
    //     );
    //   }}
    // />
    // </View>