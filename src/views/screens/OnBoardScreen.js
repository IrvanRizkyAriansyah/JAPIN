import React,{Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, TextInput, Image, StatusBar} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "../../consts/colors";
import onboard from '../../assets/onboard.png'


class OnBoardScreen extends Component{
  render(){
    return (
        <SafeAreaView style={styles.container}>
        <StatusBar hidden={true} />
            <View style={styles.containerImage}>
              <Image style={{width: '100%', height: '50%',resizeMode:'contain', justifyContent: "flex-end"}} source={onboard} />
              <Text style={{fontSize: 26, fontWeight: 'bold'}}>Learn from the best online <Text style={{fontSize: 26, fontWeight: 'bold', color: colors.blue}}>courses</Text> </Text>
            </View>
            <View style={styles.containerBtn}>
            <TouchableOpacity activeOpacity={0.8} onPress={(e) => this.props.navigation.navigate('Authentifications')} >
                <View style={styles.btn} >
                    <Text style={styles.btnTitle}>Get Started</Text>
                </View>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.white
    },

    containerImage: {
        flex: 3,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 10,
    },

    containerBtn: { 
        flex: 1, 
        justifyContent: 'flex-end', 
        padding:30,
    },

    btn:{
        backgroundColor:colors.darkblue,
        height:50,
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center',
        flexDirection: 'row'
    },

    btnTitle: {
      color: colors.white,
      fontSize: 22,
      fontWeight: 'bold'
    },
})

export default OnBoardScreen;
