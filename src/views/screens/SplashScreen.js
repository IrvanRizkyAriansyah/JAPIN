import React, { Component } from 'react';
import {View, StyleSheet, Image, Text, StatusBar} from 'react-native';
import {StackActions} from '@react-navigation/native';
import Logo from '../../assets/logo.png';
import colors from '../../consts/colors'

class SplashScreen extends Component {
    constructor(props) {
        super (props);
        this.state = {};
    }

    componentDidMount(){
        setTimeout(() => {
            this.props.navigation.dispatch(StackActions.replace('OnBoardScreen'))
        }, 5000);
    }

    render() {
        return (
            <View style={styles.container}>
            <StatusBar hidden={true} />
               <Image style={{height: '100%', width: '50%'}} 
               resizeMode={'contain'}
               source={Logo} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
     alignItems: 'center', 
     justifyContent: "center",
    backgroundColor: colors.blue
  }
})

export default SplashScreen;
