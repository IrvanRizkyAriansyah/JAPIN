import React, { Component } from 'react';
import {
  StatusBar,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  SectionList,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-virtualized-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../consts/colors';
import materi from '../../assets/materi.png';
import quiz from '../../assets/quiz.png';
import score from '../../assets/score.png';
import carousel from '../../assets/carousel.png';
import acc from '../../consts/account';
import ava from '../../assets/hindia.jpg';
import nadin from '../../assets/nadin.jpg';
import sal from '../../assets/sal.jpg';
import kuntoaji from '../../assets/kuntoaji.jpg'
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class Home extends Component {
  render() {

    const menu = [
      { id: '1', value: 'Materi', img: materi, link: 'Materi'},
      { id: '2', value: 'Quiz', img: quiz, link: 'ListQuiz'},
      { id: '3', value: 'Nilai', img: score, link: 'Nilai'}]

    const testimoni = [{
      id: 1,
      username: "Kunto Aji",
      ava: kuntoaji,
      sekolah: "SMAN 1 Mantra Mantra ",
      rating: 5,
      ulasan: "Aplikasi yang sangat bagus dapat membantu saya belajar",
    },
    {
      id: 2,
      username: "Sal Priadi",
      ava: sal,
      sekolah: "SMAN 2 Berhati",
      rating: 3,
      ulasan: "JAPIN cukup membantu saya memahami materi di sekolah",
    },
    {
      id: 3,
      username: "Nadin Amizah",
      ava: nadin,
      sekolah: "SMAN 1 Teralih",
      rating: 4,
      ulasan: "Dengan quiz yang ada melatih aku jadi lebih paham",
    },
    ]

    const FlatItem = ({ item }) => {
      return (
        <View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={(e) => this.props.navigation.navigate(item.link)}>
              <View style={styles.btnlogo}>
              <Image source={item.img} style={styles.btn} />
              </View>
            <Text style={{ textAlign: 'center' }}> {item.value} </Text>
          </TouchableOpacity>
        </View>
      );
    };

    const DATA = [
      {
        title: 'Testimoni User',
        data: testimoni,
      },
    ];

    const BUTTON =[
      {
        title: 'Button',
        data: menu,
      }
    ]

    const Testimoni = ({ item }) => {
      return (
        <View style={{ justifyContent: 'center'}}>
          <View style={styles.testimoni}>
            <View style={{ flexDirection: 'row', marginRight: 20 }}>
              <Image source={item.ava} style={styles.ava} />
              <View style={{ justifyContent: 'center', marginHorizontal: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                  {' '}
                  {item.username}{' '}
                </Text>
                <Text style={{ fontSize: 12 }}> {item.sekolah} </Text>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ marginTop: 3 }}>
                    <Ionicons name="star" size={15} color="yellow" />
                  </View>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      alignItems: 'center',
                    }}>
                    {' '}
                    {item.rating}{' '}
                  </Text>
                </View>
              </View>
            </View>
            <Text style={{ fontSize: 14, paddingTop: 5 }}> {item.ulasan} </Text>
          </View>
        </View>
      );
    };
    return (
      <SafeAreaView>
      <ScrollView>
      <View style={styles.header}>
          <View style={styles.text}>
            <Text style={{ fontSize: 18 }}> Hello </Text>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
              {' '}
              {acc.username}{' '}
            </Text>
          </View>
            <Image
              source={ava}
              style={styles.ava}
            />
        </View>
        <View style={styles.keunggulan}>
          <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
            <Text
              style={{
                fontSize: 28,
                fontWeight: 'bold',
                color: colors.darkblue,
              }}>
              {' '}
              Start
            </Text>
            <Text
              style={{
                fontSize: 28,
                fontWeight: 'bold',
                color: colors.darkblue,
              }}>
              {' '}
              Learning !
            </Text>
          </View>
          <Image
            style={{
              width: 100,
              height: 100,
              resizeMode: 'contain',
              justifyContent: 'center',
            }}
            source={carousel}
          />
        </View>
        <StatusBar hidden={false} />
        <StatusBar backgroundColor={colors.blue} barStyle="dark-content" />
      <ScrollView>

          <FlatList 
          columnWrapperStyle={{justifyContent: 'space-between'}}
          numColumns={3}
           style={styles.containerBtn} showsHorizontalScrollIndicator={false} 
            data={menu}
            renderItem={({ item }) => <FlatItem item={item} />}
          />

        <View style={styles.title}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Testimoni User</Text>
        </View>

          <SectionList horizontal showsHorizontalScrollIndicator={false} 
          style={styles.containerTestimoni}
            sections={DATA}
            renderItem={({ item }) => 
            <Testimoni item={item} />}
          />

        <View style={styles.containerFooter}>
          <View style={styles.footer}></View>
        </View>
      </ScrollView>
      </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: width,
    height: 'auto',
    backgroundColor: colors.blue,
    padding: 30,
    paddingBottom: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ava: {
    width: 65,
    height: 65,
    padding: 10,
    justifyContent: 'center',
    borderRadius: 90,
  },
  text: {
    width: 'auto',
    paddingTop: 5,
  },
  keunggulan: {
    marginTop: -50,
    marginHorizontal: 30,
    width: 'auto',
    height: 125,
    backgroundColor: 'white',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  containerBtn: {
    width: width,
    height: 'auto',
    paddingTop: width/15,
    paddingHorizontal: '8%'
  },
  btn: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  btnlogo: {
    width: 90,
    height: 90,
    borderRadius: 15,
    marginBottom: 10,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    padding: 10
  },
  containerTestimoni: {
    width: 'auto',
    height: 'auto',
    marginVertical: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
  },
  testimoni: {
    margin: 10,
    width: 225,
    height: 130,
    borderRadius: 15,
    padding: 10,
    backgroundColor: colors.blue,
  },
  title: {
    paddingTop: 20,
    paddingLeft: 30,
  },
  containerFooter: {
    height: 'auto',
    width: 'auto',
  },
  footer: {
    height: 100,
  },
});

export default Home;
