import React from 'react';
import {ScrollView, View} from 'react-native';
import StylingComponent from './pages/StylingComponent';
import FlexBox from './pages/FlexBox';
import Position from './pages/Position';
import PropsDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';
import Communication from './pages/Communication';

const App = () => {
  return (
    <View>
      <ScrollView>
        <Communication />
      </ScrollView>
    </View>
  );
};

export default App;
