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

export default class HomeScreen extends Component<{}> {
  static navigationOptions = {
    title: 'Home',
  }; 

  onPressHideTabNavigator() {
    this.props.navigation.navigate('HideTabNavigatorScreen');
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>
        <Text style={styles.text}>This is home screen</Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.onPressHideTabNavigator()}
        >
          <Text style={[styles.buttonText, styles.text]}>Hide tab navigator</Text>
        </TouchableOpacity>
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
  buttonContainer: {
    borderColor: 'orange',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'orange',
  },
  buttonText: {
    color: 'white',
    padding: 10,
  },
});