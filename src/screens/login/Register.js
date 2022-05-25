
import React from 'react'
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import Main from 'C:\\GITHUB\\tfg\\tfg\\src\\screens\\login\\Main'

export default class Register extends React.Component{
  state={
    second_name:"",
    firstname:"",
    username:"",
    password:"",
    email:""   
  }
  registered = () => {
    fetch("http://192.168.1.93:5000/registering", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body:JSON.stringify({
        second_name: this.state.second_name,
        name: this.state.name,
        username: this.state.username,
        password: this.state.password,
        email: this.state.email      
      })
    })
    .then(response => response.json())
    .then(response => {
      console.log(this.state.name)
    })
    .then(() => Actions.main())
    .catch(err => {
      console.log(err)
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>blured</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="First Name" 
            placeholderTextColor="#4FBDC1"
            onChangeText={text => this.setState({name:text})}/>
        </View>
        <View style={styles.inputView} >
        <TextInput  
            style={styles.inputText}
            placeholder="Second Name" 
            placeholderTextColor="#4FBDC1"
            onChangeText={text => this.setState({second_name:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Username" 
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
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email" 
            placeholderTextColor="#4FBDC1"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <TouchableOpacity style={styles.RegisterBtn} onPress={this.registered}>
          <Text style={styles.loginText}>REGISTER</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export {Register};

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
      marginBottom:60
    },
    inputView:{
      width:"80%",
      backgroundColor:"#465881",
      borderRadius:25,
      height:50,
      marginBottom:20,
      marginTop: 10,
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
    RegisterBtn:{
      width:"80%",
      backgroundColor:"#4071BD",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:20,
      marginBottom:40
    },
    loginText:{
      color:"#4FBDC1"
    }
  });
