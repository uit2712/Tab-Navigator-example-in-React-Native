/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

export default class HideTabNavigatorScreen extends Component<{}> {
  static navigationOptions = {
    title: 'Hide Tab Navigator',
    tabBarVisible: false,
  };

  render() {
    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>
        <Text style={styles.text}>This is hide tab screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 30,
  },
});