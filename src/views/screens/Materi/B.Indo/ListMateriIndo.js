import React, { Component } from 'react'
import {View, StyleSheet, Text, ScrollView, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ind1 from '../../../../consts/materi/indo/ind1';
import ind2 from '../../../../consts/materi/indo/ind2';
import colors from '../../../../consts/colors'

const ListMateriIndo = ({navigation}) => {
  return (
            <ScrollView> 
            <Text style={{fontSize: 18, padding: 20, fontWeight:'bold'}}>BAB 1 Surat Lamaran Pekerjaan</Text>    
            {ind1.map((i1) => ( 
              <View key={i1.id}>
              <View style={styles.containerList}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={(e) => navigation.navigate('DetailInd',{data:i1})}>
              <View style={styles.list}>
              <Text style={{fontSize: 16}}>{i1.materi}</Text>
              </View>
              </TouchableOpacity>
              </View>
              </View>
            ))}
            <View style={styles.containerList}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={(e) => navigation.navigate('ListQuiz')}>
              <View style={styles.listQuiz}>
              <Text style={{fontSize: 16}}>Quiz 1</Text>
              </View>
              </TouchableOpacity>
              </View>

            <Text style={{fontSize: 18, padding: 20, fontWeight:'bold'}}>BAB 2 Teks Cerita Sejarah</Text>    
            {ind2.map((i2) => ( 
              <View key={i2.id}>
              <View style={styles.containerList}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={(e) => navigation.navigate('DetailInd',{data:i2})}>
              <View style={styles.list}>
              <Text style={{fontSize: 16}}>{i2.materi}</Text>
              </View>
              </TouchableOpacity>
              </View>
              </View>
            ))}
            <View style={styles.containerList}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={(e) => navigation.navigate('ListQuiz')}>
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

export default ListMateriIndo;