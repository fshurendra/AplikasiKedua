import React from 'react';
import {ScrollView, View} from 'react-native';
import StylingComponent from './pages/StylingComponent';
import FlexBox from './pages/FlexBox';
import Position from './pages/Position';
import PropsDinamis from './pages/PropsDinamis';

const App = () => {
  return (
    <View>
      <ScrollView>
        <PropsDinamis />
      </ScrollView>
    </View>
  );
};

export default App;
