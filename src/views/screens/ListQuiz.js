import React, { Component } from 'react'
import {View, StyleSheet, Text, TouchableOpacity, Image, StatusBar} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../consts/colors';
import Mtk1 from '../../assets/quiz1mtk.png';
import Mtk2 from '../../assets/quiz2mtk.png';
import En1 from '../../assets/quiz1en.png';
import En2 from '../../assets/quiz2en.png';
import Kimia1 from '../../assets/quiz1kimia.png';
import Kimia2 from '../../assets/quiz2kimia.png';
import Sejarah1 from '../../assets/quiz1sejarah.png';
import Sejarah2 from '../../assets/quiz2sejarah.png';

class ListQuiz extends Component{
  render(){
  return(

        <SafeAreaView>
            <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
            <ScrollView>
            <View style={styles.container}>
            <Text style={{fontSize:18, padding:20}}>Matematika</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.containerQuiz}>
                <TouchableOpacity activeOpacity={0.8} onPress={(e)=>this.props.navigation.navigate('Quiz')} >
                <View style={styles.quiz}>
                <View style={styles.quizLogo}>
                <Image
                source={Mtk1}
                style={{ resizeMode: 'contain', width: '100%', height: '100%' }}
              />
                </View>
                <Text style={{fontSize: 16}}> Quiz 1 </Text>
                </View>
                </TouchableOpacity>
                <View style={styles.quiz}>
                <View style={styles.quizLogo}>
                <Image
                source={Mtk2}
                style={{ resizeMode: 'contain', width: '100%', height: '100%' }}
              />
                </View>
                <Text style={{fontSize: 16}}> Quiz 2 </Text>
                </View>
                </View>
            </ScrollView>
            <Text style={{fontSize: 18, padding:20}}>B. Inggris</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.containerQuiz}>
                <View style={styles.quiz}>
                <View style={styles.quizLogo}>
                <Image
                source={En1}
                style={{ resizeMode: 'contain', width: '100%', height: '100%' }}
              />
                </View>
                <Text style={{fontSize: 16}}> Quiz 1 </Text>
                </View>
                <View style={styles.quiz}>
                <View style={styles.quizLogo}>
                <Image
                source={En2}
                style={{ resizeMode: 'contain', width: '100%', height: '100%' }}
              />
                </View>
                <Text style={{fontSize: 16}}> Quiz 2 </Text>
                </View>
                </View>
            </ScrollView>

            <Text style={{fontSize: 18, padding:20}}>Kimia</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.containerQuiz}>
                <View style={styles.quiz}>
                <View style={styles.quizLogo}>
                <Image
                source={Kimia1}
                style={{ resizeMode: 'contain', width: '100%', height: '100%' }}
              />
                </View>
                <Text style={{fontSize: 16}}> Quiz 1 </Text>
                </View>
                <View style={styles.quiz}>
                <View style={styles.quizLogo}>
                <Image
                source={Kimia2}
                style={{ resizeMode: 'contain', width: '100%', height: '100%' }}
              />
                </View>
                <Text style={{fontSize: 16}}> Quiz 2 </Text>
                </View>
                </View>
            </ScrollView>

            <Text style={{fontSize: 18, padding:20}}>Sejarah</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.containerQuiz}>
                <View style={styles.quiz}>
                <View style={styles.quizLogo}>
                <Image
                source={Sejarah1}
                style={{ resizeMode: 'contain', width: '100%', height: '100%' }}
              />
                </View>
                <Text style={{fontSize: 16}}> Quiz 1 </Text>
                </View>
                <View style={styles.quiz}>
                <View style={styles.quizLogo}>
                <Image
                source={Sejarah2}
                style={{ resizeMode: 'contain', width: '100%', height: '100%' }}
              />
                </View>
                <Text style={{fontSize: 16}}> Quiz 2 </Text>
                </View>
                </View>
            </ScrollView>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}
}

const styles = StyleSheet.create({
    container: {
        height: "auto",
        paddingBottom: 20
    },
    containerQuiz: {
        paddingHorizontal: 10,
        flexDirection: "row"
    },
    quiz: {
        width: "auto",
        height: "auto",
        alignItems: "center",
        paddingHorizontal: 10
    },
    quizLogo: {
        width: 225,
        height: 100,
        backgroundColor: colors.blue,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        padding: 5
    },
})

export default ListQuiz;
