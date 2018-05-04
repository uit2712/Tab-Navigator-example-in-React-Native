/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  TouchableOpacity,
  Image,
} from 'react-native';

export default class ChooseSocialNetwork extends Component<{}> {
  static navigationOptions = {
    title: 'Choose Social Network',
  };

  constructor(props) {
    super(props)
  }

  onPressSocialNetwork(index) {
    const {navigate} = this.props.navigation;

    switch(index) {
      case 0: navigate('FacebookScreen'); break;
      case 1: navigate('InstagramScreen'); break;
      case 2: navigate('TwitterScreen'); break;
      default: navigate('HomeScreen'); break;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.socialNetworkContainer}
          onPress={() => this.onPressSocialNetwork(0)}
        >
          <Image 
            style={styles.icon}
            source={require('TabNavigator/images/facebook.png')}
          />
          <Text style={styles.text}>Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.socialNetworkContainer}
          onPress={() => this.onPressSocialNetwork(1)}
        >
          <Image 
            style={styles.icon}
            source={require('TabNavigator/images/instagram.png')}
          />
          <Text style={styles.text}>Instagram</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.socialNetworkContainer}
          onPress={() => this.onPressSocialNetwork(2)}
        >
          <Image 
            style={styles.icon}
            source={require('TabNavigator/images/twitter.png')}
          />
          <Text style={styles.text}>Twitter</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.socialNetworkContainer}
          onPress={() => this.onPressSocialNetwork(3)}
        >
          <Image 
            style={styles.icon}
            source={require('TabNavigator/images/home.png')}
          />
          <Text style={styles.text}>Home</Text>
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
  socialNetworkContainer: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 30,
  },
  icon: {
    height: 50,
    width: 50,
  },
});
