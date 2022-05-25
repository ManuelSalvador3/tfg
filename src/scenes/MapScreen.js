
import React, {useEffect, useState} from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { Input } from 'react-native-elements';
import { StyleSheet, Text, View, Dimensions, Button,  TouchableHighlight, TouchableOpacity } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import HandleLocation from 'C:\\00 TFG EXPO\\tfg\\src\\components\\Locations.js';
import useLocation from "C:\\00 TFG EXPO\\tfg\\src\\components\\prueba.js";
import * as Location from 'expo-location';
import {Permissions } from 'expo'
import Loader from 'C:\\00 TFG EXPO\\tfg\\src\\components\\Loader.js';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function MapScreen({route}) {

  // const {ubicacion} = route.params;
  const [userLocation, setLocation] = React.useState(null)
  const [latitud, setLatitud] = React.useState()
  const [longitud, setLongitud] = React.useState()
  const [errorMsg, setErrorMsg] = React.useState(null);
  const {status, setStatus} = React.useState(null)
  const [ region, setRegion ] = React.useState({
		latitude: 37.78825,
		longitude: -122.4324,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421
	})

  const [destinoDriving, setDestino] = React.useState(null)
  const [distancia, setDistancia] = React.useState(0)
  const [duracion, setDuracion] = React.useState(0)
  //Hay que llamar a la funcion de setUserPin en algun momento
  //para coger la ubicacion de una 
  const [userRegion, setUserRegion] =  React.useState(null)

  useEffect(() => {
    (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            return;
        }
        let location = await Location.getCurrentPositionAsync({})
        setLocation(location.coords)
        console.log(location)
        // .then(location =>  setLocation(location.coords))
        // let address = await Location.reverseGeocodeAsync(location.coords)
        // console.log(location.coords)
        // console.log(address)
        
        
        // console.log("LA UBICACION DEL USUARIO EN EL MAPA ES: ")
        // console.log(location)
      
    })();
  }, []);


  return (
    <>
    {userLocation === null? (
      <Loader/>
    ) : (
      
      <View style={{ flex: 1}}>
        
        <GooglePlacesAutocomplete
          placeholder='Search'
          fetchDetails={true}
          renderRightButton={() => {
          }}
          GooglePlacesSearchQuery={{
            rankby: "distance"
          }}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data);
            setRegion({
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0221
            })
            console.log(details.geometry.location.lat)
            setDestino({ latitude: details.geometry.location.lat, longitude: details.geometry.location.lng})
          }}
          query={{
            key: 'AIzaSyA-Dpr8amxmcnE-8LPk2ehApbuWm4Yw7zU',
            language: 'en',
            components: "country:es",
            radius: 30000,
            location: `${userLocation.latitude}, ${userLocation.longitude}`
          }}
          
          textInputProps={{
            InputComp: Input,
            rightIcon: { type: 'ionicon', name: 'close-circle-outline', size: 30 },
            // rightIcon: { type: 'ionicon', name: 'close-circle-outline', size: 30 },
            errorStyle: { color: 'red' },
            // clearButtonMode: 'never',
            // leftIcon: { type: 'font-awesome', name: 'chevron-left' },
            // errorStyle: { color: 'red' },
          }}
          
          styles={{
            container: { flex: 0, position: "absolute", width: "90%", marginTop: 50, marginLeft: '7%', marginRight: '5%', zIndex: 1 },
            listView: { backgroundColor: "white" }
          }}
        />
       
        {/* {distancia !== 0 && duracion !== 0 && (<View style={{alignItems: 'center',
          marginTop: '26%', backgroundColor: 'white', opacity: 0.7}}>
            <Text style={{backgroundColor: 'white',  opacity: 0.7 }}>Distancia: {distancia} kms</Text>
            <Text style={{backgroundColor: 'white',  opacity: 0.7}}>Duracion: {duracion} mins</Text>
            </View>)}  */}
      <MapView style={styles.map}
        region= {{
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
          }} 
       
        showsTraffic={true}
        showsUserLocation={true}
        followUserLocation={true}
        showsMyLocationButton={false}
        provider="google"
        mapPadding={{top:0, right:0, left:0, bottom:20}}
      >
      {destinoDriving !== null && (
        <MapViewDirections
        origin={{ latitude: userLocation.latitude, longitude: userLocation.longitude}}
        destination={{latitude: destinoDriving.latitude, longitude: destinoDriving.longitude}}
        apikey={'AIzaSyA-Dpr8amxmcnE-8LPk2ehApbuWm4Yw7zU'}
        mode='DRIVING'
        strokeWidth={6}
        strokeColor="hotpink"
        onReady={result => {
          setDistancia(result.distance.toFixed(2))
          setDuracion(result.duration.toFixed(2))
          console.log(`Distance: ${result.distance} km`)
          console.log(`Duration: ${result.duration} min.`)
        }}
      />
      )}
        
        <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} > 
        <Callout>
            <Text>Distancia: {distancia}kms</Text>
            <Text>Duracion: {duracion}mins</Text>
        </Callout>
        </Marker>

        
        {/* <Marker 
            coordinate={{
                latitude: 40.6137,
                longitude: -3.70927
            }}
        >
            <Callout>
                <Text>You are here</Text>
            </Callout>
        </Marker> */}
       
            
      </MapView>
      
      </View>

    )}
    </>
    
  );
}

const styles = StyleSheet.create({
  prueba: {
    backgroundColor: '#fff'
  },
  buscador: {
    marginBottom: 50,
    width: '90%',
    borderRadius: 10,


  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  buttonZoom: {
    backgroundColor: 'purple',
    marginTop: '60%',
    marginLeft: '80%'
  }
});

// 40.596246
// -3.7011948



// style={{marginTop:35, flex: 1 }}
// style={{marginTop: 50}}


// region={userLocation}
// initialRegion= {{
//   latitude: userLocation.coords.latitude,
//   longitude: userLocation.coords.longitude,
//   latitudeDelta: 0.0922,
//   longitudeDelta: 0.0421
// }} 




// <TouchableHighlight 
//        onPress={
//          console.log("Pulsado")
//        }>
//        <View style={styles.buttonZoom}>
//          <Ionicons name={"close-outline"} size={30}/>
//        </View>
//      </TouchableHighlight>