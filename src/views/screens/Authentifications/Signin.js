import React, { useState } from 'react'
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, TextInput, Image, Alert} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import account from "../../../consts/account"
import colors from "../../../consts/colors"

export default function Signin (props) {
  const [msgError, setMsgError] = useState("");
  const [errorMsg, setErrorMsg] = useState({email:"",password:""});
  const [data, setData] = useState({
    email: "",
    password: "",
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const handlerIconPassword = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handlerPostSignIn = () =>{
    //validation
    if(!data.email){
        setErrorMsg({...errorMsg, email:"Required field"})
    }else if(!data.password){
        setErrorMsg({...errorMsg, password:"Required field"})
    }else if(!data.email && !data.password){
        setErrorMsg({email:"Required field", password:"Required field"})
    }else{
        setErrorMsg({email:"", password:""})
        if((data.email === account.email) && (data.password === account.password) ){
            props.navigation.navigate('Main');
        }else{
            Alert.alert(
                "Invalid Grant",
                "Username or password doesn't match on system.",
                [
                  { text: "Close", onPress: () => setData({email:"",password:""}) }
                ]
            );
        }
    }
  }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerText}>
                <Text style={styles.text}>Signin</Text>
            </View>
            <View style={styles.containerInput}>
                <View style={{flexDirection: "row", marginVertical: 10}}>
                <Ionicons name="person-circle-outline" size={30} style={{backgroundColor: colors.darkblue, color: colors.white, padding: 5, margin: 5, marginRight: -45, borderRadius: 10}} />
                <TextInput style={styles.input} 
                placeholder={"Enter your mail address"}
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize='none'
                onChangeText={text => setData({ ...data, email: text })}
                defaultValue={data.email} />
                </View>
                <Text style={styles.textError}>{errorMsg.email}</Text>
                <View style={{flexDirection: "row", marginVertical: 10}}>
                <Ionicons name="lock-closed-outline" size={30} style={{backgroundColor: colors.darkblue ,color: colors.white, padding: 5, margin: 5, marginRight: -45, borderRadius: 10}} />
                <TextInput 
                style={styles.input} 
                secureTextEntry={data.secureTextEntry}
                placeholder={"Enter your password"}
                autoCorrect={false}
                onChangeText={text => setData({ ...data, password: text })}
                defaultValue={data.password} />
                <TouchableOpacity
                style={{ justifyContent: 'center', marginLeft: -40, paddingRight: 20}}
                onPress={() => handlerIconPassword()}
            >
                <Ionicons
                name={data.secureTextEntry ? "eye" : "eye-off"}
                style={{fontSize:20, color: "#cdcdcd"}}
              />
            </TouchableOpacity>
                </View>
                <Text style={styles.textError}>{errorMsg.password}</Text>
            </View>
            <View style={styles.containerBtn}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => handlerPostSignIn()} >
                <View style={styles.btn} >
                    <Text style={styles.btnTitle}>Sign in</Text>
                    <Ionicons name="log-in-outline" size={30} style={{color: colors.white, marginLeft: 5}} />
                </View>
            </TouchableOpacity>
            <View style={styles.containerLine}>
            <View style={styles.line} />
            <Text style={{paddingHorizontal: 10, marginTop: -10, color: "gray"}}> OR </Text>
            <View style={styles.line} />
            </View>
            <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate('Signup')} >
                <View style={styles.btnSignup} >
                    <Text style={styles.btnTitleSignup}>Sign up</Text>
                    <Ionicons name="log-in-outline" size={30} style={{color: colors.darkblue, marginLeft: 5}} />
                </View>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.white
    },

    containerText: {
        flex: 4,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    containerInput: {
        flex: 3,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 30
    },

    containerBtn: { 
        flex: 3, 
        justifyContent: 'flex-start', 
        paddingHorizontal:30,
    },

    btn:{
        backgroundColor:colors.darkblue,
        height:50,
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center',
        flexDirection: 'row'
    },

    btnSignup:{
        backgroundColor:colors.white,
        height:50,
        borderRadius:15,
        borderWidth: 2,
        borderColor: colors.darkblue,
        justifyContent:'center',
        alignItems:'center',
        flexDirection: 'row'
    },
    
    text: {
        fontSize: 32,
        fontWeight: "bold",
        color: colors.darkblue
    },

    input: {
        borderWidth: 1,
        borderColor: "#cdcdcd",
        padding: 5,
        paddingLeft: 60,
        width: "100%",
        margin: 5,
        borderRadius: 10,
    },
    containerLine: {
        width: "auto",
        paddingVertical: 20,
        flexDirection: "row",
        justifyContent: 'center'
    },
    line: {
        width: 120,
        height: 2,
        backgroundColor: colors.darkblue
        
    },
    btnTitle: {
      color: colors.white,
      fontSize: 22,
      fontWeight: 'bold'
    },
    btnTitleSignup: {
      color: colors.darkblue,
      fontSize: 22,
      fontWeight: 'bold'
    },
    textError: {
    color: 'red',
    marginVertical: -10,
    fontStyle: "italic",
    },
})
