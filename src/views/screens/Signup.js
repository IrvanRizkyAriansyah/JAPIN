import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, TextInput, Image} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from '../../consts/colors'

const Login = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerText}>
                <Text style={styles.text}>Signup</Text>
            </View>
            <View style={styles.containerInput}>
                <View style={{flexDirection: "row", marginVertical: 10}}>
                <Ionicons name="person-circle-outline" size={30} style={{backgroundColor: colors.darkblue, color: colors.white, padding: 2.5, margin: 5, marginRight: -40, borderRadius: 10}} />
                <TextInput style={styles.input} placeholder="Nama Lengkap" />
                </View>
                <View style={{flexDirection: "row", marginVertical: 10}}>
                <Ionicons name="person-circle-outline" size={30} style={{backgroundColor: colors.darkblue, color: colors.white, padding: 2.5, margin: 5, marginRight: -40, borderRadius: 10}} />
                <TextInput style={styles.input} placeholder="Username" />
                </View>
                <View style={{flexDirection: "row", marginVertical: 10}}>
                <Ionicons name="mail-outline" size={30} style={{backgroundColor: colors.darkblue, color: colors.white, padding: 2.5, margin: 5, marginRight: -40, borderRadius: 10}} />
                <TextInput style={styles.input} placeholder="Email" />
                </View>
                <View style={{flexDirection: "row", marginVertical: 10}}>
                <Ionicons name="ribbon-outline" size={30} style={{backgroundColor: colors.darkblue, color: colors.white, padding: 2.5, margin: 5, marginRight: -40, borderRadius: 10}} />
                <TextInput style={styles.input} placeholder="Kelas [ 1-12 ]" />
                </View>
                <View style={{flexDirection: "row", marginVertical: 10}}>
                <Ionicons name="school-outline" size={30} style={{backgroundColor: colors.darkblue, color: colors.white, padding: 2.5, margin: 5, marginRight: -40, borderRadius: 10}} />
                <TextInput style={styles.input} placeholder="Tingkat [ SD/SMP/SMA ]" />
                </View>
                <View style={{flexDirection: "row", marginVertical: 10}}>
                <Ionicons name="business-outline" size={30} style={{backgroundColor: colors.darkblue, color: colors.white, padding: 2.5, margin: 5, marginRight: -40, borderRadius: 10}} />
                <TextInput style={styles.input} placeholder="Asal Sekolah" />
                </View>

            </View>
            <View style={styles.containerBtn}>
            <TouchableOpacity activeOpacity={0.8} onPress={(e) => navigation.navigate('Login')} >
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
    }
})

export default Login;
