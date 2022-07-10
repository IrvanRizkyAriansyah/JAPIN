import { Text, View, ScrollView, Image,ImageBackground } 
from "react-native";
import React, { Component } from "react";
import colors from "../../../consts/colors";
import SignIn from "./Signin";
import { StatusBar } from "expo-status-bar";

export class Authentifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: this.props.navigation,
    };
  }
  render() {
    return (
              <SignIn navigation={this.state.navigation} />
    );
  }
}

export default Authentifications;