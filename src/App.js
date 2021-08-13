import React from 'react';
import {ScrollView, View} from 'react-native';
import StylingComponent from './pages/StylingComponent';
import FlexBox from './pages/FlexBox';
import Position from './pages/Position';
import PropsDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';
import Communication from './pages/Communication';
import ReactNativeSvg from './pages/ReactNativeSvg';

const App = () => {
  return (
    <View>
      <ScrollView>
        <ReactNativeSvg />
      </ScrollView>
    </View>
  );
};

export default App;
