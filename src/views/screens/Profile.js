import React, { Component } from 'react'
import {View, StyleSheet, Text, TextInput, ScrollView, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from '../../consts/colors';
import acc from '../../consts/account';
import { AirbnbRating } from 'react-native-ratings';
import ava from '../../assets/hindia.jpg';

class Profile extends Component{
  render(){
    return (
      <ScrollView>
        <View style={styles.container}>
        {/* <Text style={{fontSize: 24, fontWeight: "bold", textAlign: "center", paddingTop: 10}}>Profile</Text> */}
        <View style={styles.ava}>
          <Image
            source={ava}
            style={{width: '100%', height: '100%', resizeMode: 'contain', borderRadius: 200 }}
          />
        </View>
        </View>
        <Text style={{fontSize: 20, fontWeight: "bold", textAlign: "center"}}>{acc.username}</Text>
        <View style={styles.text}>
            <Text style={{fontSize: 16}}>Kelas       : {acc.kelas}</Text>
            <Text style={{fontSize: 16}}>Sekolah  : {acc.sekolah}</Text> 
            <Text style={{fontSize: 16}}>Email       : {acc.email}</Text>
        </View>
        <View style={styles.containerBtn}>
          <View style={styles.btn}>
            <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: "center", color: colors.white }}>Edit Profile</Text>
          </View>
        </View>
        <View style={styles.title}>
              <Text style={{fontSize: 20, fontWeight: "bold", marginVertical: 20}}> Beri Rating dan Ulasan </Text>
        </View>
        <View>
          <AirbnbRating
            count={5}
            defaultRating={0}
            size={20}
            showRating={false}
          />
          <TextInput 
          multiline={true}
          numberOfLines={4}
          style={styles.input} placeholder="Ketik ulasan anda" />
        </View>
        <View style={{ alignItems: 'flex-end', paddingRight: 30 }}>
          <View style={styles.btnKirim}>
            <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: "center", color: colors.white }}>Kirim</Text>
          </View>
        </View>
        <View style={styles.footer}>
        </View>
      </ScrollView>
    )
}
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        paddingTop: 20,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    ava: {
        padding: 20,
        width: 200,
        height: 200
    },
    text: {
        flex: 1,
        alignItems: "flex-start",
        padding: 30
    },
    containerBtn: {
        flex: 1,
        width: "auto",
        alignItems: "center"
    },
    btn: {
        height: 30,
        width: 120,
        backgroundColor: colors.darkblue,
        borderRadius: 15
    },
    btnKirim: {
        height: 30,
        width: 120,
        backgroundColor: colors.darkblue,
        borderRadius: 10
    },
    title:{
        flex: 1,
        paddingTop:20,
        paddingLeft:30,
    },
    input: {
        borderWidth: 1,
        borderColor: "#cdcdcd",
        padding: 5,
        //paddingBottom: 100,
        //width: "auto",
        maxWidth: 'auto',
        minWidth: 'auto',
        flexWrap: "wrap",
        overflow: "scroll",
        borderRadius: 10,
        marginHorizontal: 30,
        marginVertical: 20,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        textAlignVertical: 'top'
    },
    footer: {
    height: 100,
  },
})

export default Profile;