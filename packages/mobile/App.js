import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import Brew9 from 'theme/Brew9/index';
import SplashScreen from 'components/SplashScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <SplashScreen logo={Brew9.logoRequire()} /> */}
        {Brew9.getLogo()}
      </SafeAreaView>
    </>
  );
};

export default App;
