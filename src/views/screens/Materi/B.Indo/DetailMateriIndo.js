import React, { Component } from 'react'
import {View, StyleSheet, Text, ScrollView, TouchableOpacity, StatusBar} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../../../consts/colors'

const DetailMateriIndo = ({route}) => {
  return (            <ScrollView>
            <StatusBar backgroundColor={colors.blue} barStyle="dark-content" />
            <View style={styles.container}>
            <Text style={{fontSize: 18, padding: 20, textAlign: 'center', fontWeight: 'bold'}}>{route.params.data.judul}</Text>
            <View style={styles.containerDetail}>
            <View style={styles.containerImage} />
            </View>
            <View style={styles.containerText}>
            <Text style={{fontSize: 16, textAlign: 'justify'}}>{route.params.data.p}</Text>
            </View>
            </View>
            </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "auto",
        height: "auto"
    },
    containerDetail: {
        marginHorizontal: 20,
        marginBottom: 20,
    },
    containerImage: {
        width: 'auto',
        height: 100,
        backgroundColor: "white",
        padding: 20,
        borderRadius: 15,
        alignItems: 'center'
    },
    containerText: {
        width: 'auto',
        height: 'auto',
        paddingHorizontal: 20,
    }
})

export default DetailMateriIndo;