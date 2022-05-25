// Login.js
import React from 'react'
// import { Actions } from 'react-native-router-flux';
import { StyleSheet, Alert, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import Register from './Register';
import {Actions} from 'react-native-router-flux'

export default class Login extends React.Component {
  state={
    username:"",
    password:"",
    sacado1: "",
    sacado2: "",
    haserror: false
  }

  auth = () => {
    if(this.State.sacado1) {
      Actions.main()
    }
    
  }
  
  loginin = async (event) => {
    event.preventDefault();
    try {
      const responsive = await fetch(`http://192.168.1.93:5000/login/${this.state.username}/${this.state.password}`, {
        method: "GET"
      })
      .then(responsive => responsive.json())
      if(responsive != undefined) {
        this.setState({
          sacado1: responsive[0].username,
          sacado2: responsive[0].password
        })
        Actions.main()
        console.log("Login correcto, el usuario existe")
      } else {
        this.State.haserror = true
        console.log("Incorrect user or password")
      }
    } catch (err) {
      Alert.alert(
        "Error while Login",
        "Invalid username or password"
      )
      console.log("Usuario o contraseña incorrectos")
    }
    // event.preventDefault();
    // const responsive = await fetch(`http://192.168.1.93:5000/login/${this.state.username}/${this.state.password}`, {
    //   method: "GET"
    // })
    // .then(responsive => responsive.json())
    // .catch(err) {
    //   console.log("Error con el login")
    // }
    // if(responsive != undefined) {
    //   this.setState({
    //     sacado1: responsive[0].username,
    //     sacado2: responsive[0].password
    //   })
    //   Actions.main()
    //   console.log("Login correcto, el usuario existe")
    // } else {
    //   this.State.haserror = true
    //   console.log("Incorrect user or password")
    // }
    // // .then(responsive => {
    //   this.setState({
    //     sacado1: responsive[0].username,
    //     sacado2: responsive[0].password
    //   })
    // })
    
  }


  
  render() {
    if(this.state.haserror) {
          return <Alert severity="error">This is an error alert — check it out!</Alert>
    }
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>blured</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Username..." 
            placeholderTextColor="#4FBDC1"
            onChangeText={text => this.setState({username:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#4FBDC1"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={this.loginin} >
          <Text style={styles.loginText} onPress={this.loginin}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText} onPress={() => Actions.register()}>Signup</Text>
        </TouchableOpacity>
      </View>
    )
  } 
}
export {Login};


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

{/* <View style={styles.container}>
          <Text style={styles.logo}>blured</Text>
          <View style={styles.inputView} >
            <TextInput  
              style={styles.inputText}
              placeholder="Email..." 
              placeholderTextColor="#4FBDC1"
              onChangeText={text => this.setState({email:text})}/>
          </View>
          <View style={styles.inputView} >
            <TextInput  
              secureTextEntry
              style={styles.inputText}
              placeholder="Password..." 
              placeholderTextColor="#4FBDC1"
              onChangeText={text => this.setState({password:text})}/>
          </View>
          <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn} >
            <Text style={styles.loginText} onClick={"Hola"}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.loginText} onClick={"Hola"}>Signup</Text>
          </TouchableOpacity>
        </View> */}