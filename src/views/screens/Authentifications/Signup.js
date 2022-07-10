import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, TextInput, Image} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from '../../../consts/colors'

const Signup = (props) => {
    const [msgError, setMsgError] = useState("");
    const [errorMsg, setErrorMsg] = useState({fullname:"", username:"",email:"",password:"", class:"", level:"", school: ""});
    const [data, setData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    class: "",
    level: "",
    school: ""
    })

    const handlerPostSignUp = () => {
        //validation
        if (!data.fullname) {
            setErrorMsg({ ...errorMsg, fullname: "Required field" })
        } else if (!data.username) {
            setErrorMsg({ ...errorMsg, username: "Required field" })
        } else if (!data.email) {
            setErrorMsg({ ...errorMsg, email: "Required field" })
        } else if (!data.password) {
            setErrorMsg({ ...errorMsg, password: "Required field" })
        } else if (!data.class) {
            setErrorMsg({ ...errorMsg, class: "Required field" })
        } else if (!data.level) {
            setErrorMsg({ ...errorMsg, level: "Required field" })
        } else if (!data.school) {
            setErrorMsg({ ...errorMsg, school: "Required field" })
        } else if (!data.fullname && !data.username && !data.email && !data.password && !data.class && !data.level && !data.school) {
            setErrorMsg({ fullname: "Required field", username: "Required field", email: "Required field", password: "Required field" , class: "Required field", level: "Required field", school: "Required field"})
        } else {
            props.navigation.navigate('Signin')
        }
    }



    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerText}>
                <Text style={styles.text}>Signup</Text>
            </View>
            <View style={styles.containerInput}>
                <View style={{flexDirection: "row", marginVertical: 10}}>
                <Ionicons name="person-circle-outline" size={30} style={{backgroundColor: colors.darkblue, color: colors.white, padding: 2.5, margin: 5, marginRight: -40, borderRadius: 10}} />
                <TextInput style={styles.input} 
                 placeholder="Fullname"
                 autoCorrect={false}
                 autoCapitalize='none'
                 onChangeText={text => setData({ ...data, fullname: text })}
                 defaultValue={data.fullname} /> 
                </View>
                <Text style={styles.textError}>{errorMsg.fullname || msgError}</Text>
                <View style={{flexDirection: "row", marginVertical: 10}}>
                <Ionicons name="person-circle-outline" size={30} style={{backgroundColor: colors.darkblue, color: colors.white, padding: 2.5, margin: 5, marginRight: -40, borderRadius: 10}} />
                <TextInput style={styles.input} 
                 placeholder="Username" 
                 autoCorrect={false}
                 autoCapitalize='none'
                 onChangeText={text => setData({ ...data, username: text })}
                 defaultValue={data.username} />
                </View>
                <Text style={styles.textError}>{errorMsg.username}</Text>
                <View style={{flexDirection: "row", marginVertical: 10}}>
                <Ionicons name="mail-outline" size={30} style={{backgroundColor: colors.darkblue, color: colors.white, padding: 2.5, margin: 5, marginRight: -40, borderRadius: 10}} />
                <TextInput style={styles.input} 
                 placeholder={"Email"}
                 keyboardType="email-address"
                 autoCorrect={false}
                 autoCapitalize='none'
                 onChangeText={text => setData({ ...data, email: text })}
                 defaultValue={data.email} />
                </View>
                <Text style={styles.textError}>{errorMsg.email}</Text>
                <View style={{flexDirection: "row", marginVertical: 10}}>
                <Ionicons name="lock-closed-outline" size={30} style={{backgroundColor: colors.darkblue, color: colors.white, padding: 2.5, margin: 5, marginRight: -40, borderRadius: 10}} />
                <TextInput style={styles.input} 
                 placeholder="Password" 
                 autoCorrect={false}
                 autoCapitalize='none'
                 onChangeText={text => setData({ ...data, password: text })}
                 defaultValue={data.password} />
                </View>
                <Text style={styles.textError}>{errorMsg.password}</Text>
                <View style={{flexDirection: "row", marginVertical: 10}}>
                <Ionicons name="ribbon-outline" size={30} style={{backgroundColor: colors.darkblue, color: colors.white, padding: 2.5, margin: 5, marginRight: -40, borderRadius: 10}} />
                <TextInput style={styles.input} 
                 placeholder="Class [ 1-12 ]" 
                 autoCorrect={false}
                 autoCapitalize='none'
                 onChangeText={text => setData({ ...data, class: text })}
                 defaultValue={data.class} />
                </View>
                <Text style={styles.textError}>{errorMsg.class}</Text>
                <View style={{flexDirection: "row", marginVertical: 10}}>
                <Ionicons name="school-outline" size={30} style={{backgroundColor: colors.darkblue, color: colors.white, padding: 2.5, margin: 5, marginRight: -40, borderRadius: 10}} />
                <TextInput style={styles.input} 
                 placeholder="Level [ SD/SMP/SMA ]" 
                 autoCorrect={false}
                 autoCapitalize='none'
                 onChangeText={text => setData({ ...data, level: text })}
                 defaultValue={data.level} />
                </View>
                <Text style={styles.textError}>{errorMsg.level}</Text>
                <View style={{flexDirection: "row", marginVertical: 10}}>
                <Ionicons name="business-outline" size={30} style={{backgroundColor: colors.darkblue, color: colors.white, padding: 2.5, margin: 5, marginRight: -40, borderRadius: 10}} />
                <TextInput style={styles.input} 
                 placeholder="School" 
                 autoCorrect={false}
                 autoCapitalize='none'
                 onChangeText={text => setData({ ...data, school: text })}
                 defaultValue={data.school} />
                </View>
                <Text style={styles.textError}>{errorMsg.school}</Text>

            </View>
            <View style={styles.containerBtn}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => handlerPostSignUp()} >
                <View style={styles.btn} >
                    <Text style={styles.btnTitle}>Sign up</Text>
                    <Ionicons name="log-in-outline" size={30} style={{color: colors.white, marginLeft: 5}} />
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
        flex: 3,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    containerInput: {
        height: "auto",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 30,
        paddingVertical: 10

    },

    containerBtn: { 
        flex: 3, 
        justifyContent: 'flex-start', 
        paddingHorizontal:30,
        paddingTop: 20 
    },

    btn:{
        backgroundColor:colors.darkblue,
        height:50,
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center',
        flexDirection: 'row'
    },
    
    text: {
        fontSize: 32,
        fontWeight: 'bold',
        color: colors.darkblue
    },

    input: {
        borderWidth: 1,
        borderColor: "#cdcdcd",
        padding: 5,
        paddingLeft: 50,
        width: "100%",
        margin: 5,
        borderRadius: 10
    },
    btnTitle: {
      color: colors.white,
      fontSize: 22,
      fontWeight: 'bold'
    },
    
    textError: {
        color: 'red',
        marginVertical: -10,
        fontStyle: "italic",
    },
})

export default Signup;
