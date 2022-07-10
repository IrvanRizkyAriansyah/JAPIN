import { StyleSheet, Text, View, StatusBar} from "react-native";
import React, { Component } from "react";
import Nilai from "./Nilai";
import colors from "../../../consts/colors";


export class NilaiScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return ( 
      <View style={styles.ScoreContainer}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
        <Nilai />
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  ScoreContainer: {
    height: 'auto'
  }
});

export default NilaiScreen;