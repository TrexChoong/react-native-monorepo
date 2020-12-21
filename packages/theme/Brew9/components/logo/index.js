import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

export default class Logo extends React.PureComponent {
  render(){
    return <Image
          source={require('./../../assets/images/logo.png')}
        />
  }
}