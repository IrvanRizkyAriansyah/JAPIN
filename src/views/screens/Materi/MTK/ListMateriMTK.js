import React, { Component } from 'react'
import {View, StyleSheet, Text, ScrollView, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import mtk1 from '../../../../consts/materi/mtk/mtk1';
import mtk2 from '../../../../consts/materi/mtk/mtk2';
import colors from '../../../../consts/colors';


const ListMateriMTK = ({navigation}) => {
  return (
            <ScrollView> 
            <Text style={{fontSize: 18, padding: 20, fontWeight:'bold'}}>BAB 1 Geometri Bidang Datar</Text>    
            {mtk1.map((m1) => ( 
              <View key={m1.id}>
              <View style={styles.containerList}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={(e) => navigation.navigate('DetailMTK',{data:m1})}>
              <View style={styles.list}>
              <Text style={{fontSize: 16}}>{m1.materi}</Text>
              </View>
              </TouchableOpacity>
              </View>
              </View>
            ))}
            <View style={styles.containerList}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={(e) => navigation.navigate('Quiz')}>
              <View style={styles.listQuiz}>
              <Text style={{fontSize: 16}}>Quiz 1</Text>
              </View>
              </TouchableOpacity>
              </View>

            <Text style={{fontSize: 18, padding: 20, fontWeight:'bold'}}>BAB 2 Geometri Bidang Ruang</Text>    
            {mtk2.map((m2) => ( 
              <View key={m2.id}>
              <View style={styles.containerList}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={(e) => navigation.navigate('DetailMTK',{data:m2})}>
              <View style={styles.list}>
              <Text style={{fontSize: 16}}>{m2.materi}</Text>
              </View>
              </TouchableOpacity>
              </View>
              </View>
            ))}
            <View style={styles.containerList}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={(e) => navigation.navigate('Quiz')}>
              <View style={styles.listQuiz}>
              <Text style={{fontSize: 16}}>Quiz 2</Text>
              </View>
              </TouchableOpacity>
              </View>
            </ScrollView>
    );
}

const styles = StyleSheet.create({
    containerList: {
        marginHorizontal: 20,
    },
    list: {
        width: "auto",
        height: "auto",
        backgroundColor: colors.blue,
        padding: 20,
        borderRadius: 15,
        alignItems: 'center',
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    listQuiz: {
        width: "auto",
        height: "auto",
        backgroundColor: colors.yellow,
        padding: 20,
        borderRadius: 15,
        alignItems: 'center',
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
})

export default ListMateriMTK;