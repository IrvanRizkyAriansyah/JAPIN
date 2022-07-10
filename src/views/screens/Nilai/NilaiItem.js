import { StyleSheet, Text, TouchableOpacity, View, Modal, Alert, Button, Image } from "react-native";
import React, { useState } from 'react'
import colors from '../../../consts/colors'
import score from '../../../assets/score.png';

const NilaiItem = ({ item }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModalPress = () => setModalVisible(true);
  const handleCloseModalPress = () => setModalVisible(false);
  {/*const simpleAlert = () => {
    Alert.alert(
      'Nilai',
      'Nilai '+item.mp+' kamu '+((item.quiz1+item.quiz2+item.quiz3)/3))
  }*/}

  return (
    <View>
    <TouchableOpacity activeOpacity={0.3} onPress={() => setModalVisible(true)}>
      {/*()=>alert('Nilai '+item.mp+' kamu \n'+((item.quiz1+item.quiz2+item.quiz3)/3) )}>*/}

      <View style={styles.itemContainer}>
      <View style={styles.itemBG}>
          <View style={styles.itemMain}>
            <Text style={{fontSize:18,fontWeight: "bold"}}>{item.mp}</Text>
          </View>   
      </View>
        <View style={styles.itemFooter}>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.itemText}>Quiz 1</Text>
            <Text style={{ ...styles.itemText, fontWeight: "bold" }}>{item.quiz1}</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.itemText}>Quiz 2</Text>
            <Text style={{ ...styles.itemText, fontWeight: "bold" }}>{item.quiz2}</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.itemText}>Quiz 3</Text>
            <Text style={{ ...styles.itemText, fontWeight: "bold" }}>{item.quiz3}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
    <View style={{flex:1, justifyContent:'center'}}>
    <Modal transparent={true} backdropColor="rgba(0,0,0,0.5)" visible={modalVisible}
    onBackdropPress={() => setModalVisible(false)}
    >
        <View style={styles.modalContentContainer}>
          <View style={styles.modal}>
          <Image
                style={{ width: 100, height: 100, resizeMode: 'contain', margin: 5 }}
                source={score}
              />
          <Text style={{fontSize:16, textTransform: 'uppercase'}}>Nilai {item.mp} kamu adalah</Text>
          <Text style={{fontSize:26, fontWeight: 'bold'}}> {(item.quiz1+item.quiz2+item.quiz3)/3} </Text>
          <TouchableOpacity onPress={handleCloseModalPress} style={styles.btnOk}> 
          <Text style={{fontSize:16, textAlign: 'center', color: 'white'}}> Ok </Text>
          </TouchableOpacity>
          </View>
        </View>
    </Modal>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    borderWidth: 1,
    borderColor: "#d5d5d5",
    marginVertical: 10,
    padding: 15,
    backgroundColor: "white",
    borderRadius: 15,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemBG: {
    paddingHorizontal: 15,
    paddingTop: 10,
    backgroundColor: colors.blue,
    borderRadius: 15,
    margin: -15,
    height: 50
  },
  itemMain: {
    flex: 3
  },
  itemFooter: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  itemText: { color: colors.darkblue, fontSize: 16 },
  modalContentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  modal:{
    height: 'auto',
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    padding: 20,
    backgroundColor: colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  btnOk: {
        margin: 5,
        height: 30,
        width: 120,
        backgroundColor: colors.darkblue,
        borderRadius: 10,
        justifyContent: 'center'
    },
});

export default NilaiItem;