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
  View
} from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import HomeScreen from './HomeScreen';
import HideTabNavigatorScreen from './HideTabNavigatorScreen';
import ChooseSocialNetwork from './ChooseSocialNetwork';
import FacebookScreen from './FacebookScreen';
import InstagramScreen from './InstagramScreen';
import TwitterScreen from './TwitterScreen';

// import icon types
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';

const HomeStack = StackNavigator({
  HomeScreen: {screen: HomeScreen},
  HideTabNavigatorScreen: {screen: HideTabNavigatorScreen},
});

const SocialNetworkStack = StackNavigator({
  ChooseSocialNetwork: {screen: ChooseSocialNetwork},
  FacebookScreen: {screen: FacebookScreen},
  InstagramScreen: {screen: InstagramScreen},
  TwitterScreen: {screen: TwitterScreen},
});

const Tabs = TabNavigator(
{
  Home: {screen: HomeStack},
  SocialNetwork: {screen: SocialNetworkStack},
},
{
  navigationOptions: ({navigation}) => ({
    tabBarIcon: ({focused, tintColor}) => {
      const {routeName} = navigation.state;

      switch(routeName) {
        case 'Home':
          return (
            <Entypo
              name='home'
              color={tintColor}
              size={25}
            />
          );
        case 'SocialNetwork':
          return (
            <Entypo
              name='network'
              color={tintColor}
              size={25}
            />
          );

        default: return null;
      }
    },
  }),
  tabBarPosition: 'bottom',
  tabBarComponent: TabBarBottom,
  tabBarOptions: {
    activeBackgroundColor: 'rgb(237, 0, 140)',
    activeTintColor: 'white',
    inactiveBackgroundColor: 'white',
    inactiveTintColor: 'rgb(237, 0, 140)',
    showLabel: true,
    showIcon: false,
    tabStyle: {
      borderColor: 'rgb(237, 0, 140)',
      borderWidth: 1,
    },
    labelStyle: {
      fontSize: 15,
    },
  },
}
);

export default Tabs;