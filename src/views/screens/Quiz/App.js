/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';
import { Quiz } from './screens';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: this.props.navigation,
    };
  }
  render() {
    return (
              <Quiz navigation={this.state.navigation} />
    );
  }
}


export default App;
