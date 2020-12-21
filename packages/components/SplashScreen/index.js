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
import s from './styles'
import Button from '../Button';

class SplashScreen extends React.Component {
  render() {
    const logoSource = this.props.logo;
    return (
      <View style={s.container}>
        <Image resizeMode="contain" style={s.mainLogo} source={logoSource}></Image>
        {/* <View style={s.slides}>
          <Image resizeMode="contain" style={s.slideImage} source={item.src}></Image>
        </View> */}
        <Button
          // onPress={() => navigate('Login1')}
          buttonStyles={s.button1}
          textStyles={s.text1}
          content="HOME"></Button>
      </View>
    )
  }
}
export default SplashScreen;