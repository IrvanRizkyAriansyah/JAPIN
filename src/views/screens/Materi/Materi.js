import React, { Component } from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity, Image, Text, StatusBar, Dimensions} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Main from '../../components/MainComponent';
import mtk from '../../../assets/matematika.png';
import fisika from '../../../assets/fisika.png';
import kimia from '../../../assets/kimia.png';
import biologi from '../../../assets/biologi.png';
import sejarah from '../../../assets/sejarah.png';
import bahasa from '../../../assets/bahasa.png';
import geografi from '../../../assets/geografi.png';
import literatur from '../../../assets/literatur.png';
import bahasa2 from '../../../assets/bahasa2.png';
import colors from '../../../consts/colors';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class Materi extends Component {
    render() {
        const listmp = [
            { id: 1, mp: 'MTK', img: mtk, link: 'MTK'},
            { id: 2, mp: 'B. Indo', img: bahasa, link: 'Ind'},
            { id: 3, mp: 'Fisika', img: fisika, link: ''},
            { id: 4, mp: 'Sejarah', img: sejarah, link: ''}, 
            { id: 5, mp: 'Biologi', img: biologi, link: ''}, 
            { id: 6, mp: 'Geografi', img: geografi, link: ''},
            { id: 7, mp: 'Literatur', img: literatur, link: ''}, 
            { id: 8, mp: 'Kimia', img: kimia, link: ''},
            { id: 9, mp: 'B. Inggris', img: bahasa2, link: ''}, 
            
        ]

        const FlatItem = ({ item }) => {
            return (
              <View style={{paddingVertical: 10}}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={(e) => this.props.navigation.navigate(item.link,{id:item.id})}>
                    <View style={styles.materiLogo}>
                    <Image source={item.img} style={styles.materi} />
                    </View>
                  <Text style={{ textAlign: 'center' }}> {item.mp} </Text>
                </TouchableOpacity>
              </View>
            );
          };

        return (
            <View>
                <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
                <FlatList 
                    numColumns={3}
                    columnWrapperStyle={{justifyContent: 'space-between'}}
                    style={styles.containerMateri}
                    data={listmp}
                    renderItem={({ item }) => <FlatItem item={item} />}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerMateri : {
        width: "auto",
        height: "auto",
        padding: width/20,
        
    },
    materi: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        borderRadius: 15,
    },
    materiLogo : {
        width: 90,
        height: 90,
        borderRadius: 15,
        margin: 8,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: 'row',
    },
})
    
export default Materi;
