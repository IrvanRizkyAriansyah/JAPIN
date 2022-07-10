import React, { Component } from 'react'
import {View, StyleSheet, Text, SafeAreaView, TextInput,TouchableOpacity, StatusBar, Dimensions} from 'react-native';
import colors from '../../consts/colors'
import Ionicons from "react-native-vector-icons/Ionicons";
import { FlatList } from '../../../node_modules/react-native-gesture-handler';

class Cari extends Component{
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            showFlatlist: false,
        };
    }

  render(){
    const DATA = [
        {
            id: 1,
            mp: "Definisi Sudut",
            link: "MTK"
        },
        {
            id: 2,
            mp: "Macam-Macam Sudut",
            link: "MTK"
        },
        {
            id: 3,
            mp: "Bagian-Bagian Bangun Datar",
            link: "MTK"
        },
        {
            id: 4,
            mp: "Keliling dan Luas Bangun Datar",
            link: "MTK"
        },
        {
            id: 5,
            mp: "Definisi Bidang Ruang",
            link: "MTK"
        },
        {
            id: 6,
            mp: "Jenis-Jenis Bidang Ruang",
            link: "MTK"
        },
        {
            id: 7,
            mp: "Rumus Bidang Ruang",
            link: "MTK"
        },
        {
            id: 8,
            mp: "Pengertian Surat Lamaran Pekerjaan",
            link: "Ind"
        },
        {
            id: 9,
            mp: "Sistematika Surat Lamaran Pekerjaan",
            link: "Ind"
        },
        {
            id: 10,
            mp: "Unsur Kebahasaan Surat Lamaran Pekerjaan",
            link: "Ind"
        },
    ]

    const FlatItem = ({ item }) => {
        return (
          <View style={{flex:1,marginHorizontal: 20, marginVertical: 5, borderRadius: 10, backgroundColor: colors.white, padding: 10}}>
                <Text style={{ textAlign: 'left', fontSize: 18 }}> {item.mp} </Text>
          </View>
        );
      };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
            <View style={styles.containerCari}>
            <Ionicons name="search-outline" size={20} style={{padding: 5, marginLeft: 10}} />
            <TextInput 
                style={styles.cari} 
                placeholder="Cari" 
                onChangeText={(text) => this.setState({search: text, showFlatlist: true})}
                value={this.state.search}
            />
            </View>
            </View>
            <View style={styles.containerText}>
            {this.state.showFlatlist ? (
            <FlatList 
                data={DATA}
                renderItem={({ item }) => <FlatItem item={item} />}
            />):
            <View>
            <Text style={{fontSize: 18, fontWeight: "bold",textAlign:"center"}}>Belajar semua yang kamu butuhkan</Text>
            <Text style={{fontSize: 16, textAlign:"center"}}>cari materi dan quiz yang ingin kamu pelajari</Text>
            </View> }
            </View>
            <View style={styles.footer}></View>
        </SafeAreaView>
    )
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        height: 'auto',
        paddingTop: '10%',
        backgroundColor: colors.blue,
        padding: 10,
    },
    containerCari: {
        backgroundColor: colors.white,
        borderRadius: 10,
        flexDirection: 'row'
    },
    containerText: {
        flex: 5,
        justifyContent: 'center',
    },
    cari: {
        flex: 1,
        fontSize: 16,
        paddingHorizontal: 10
    },
    footer: {
        flex: 1,
      },
})

export default Cari;
