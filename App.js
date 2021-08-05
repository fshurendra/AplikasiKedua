import React from 'react';
import {ScrollView, View} from 'react-native';
import StylingReactNativeComponent from './StylingReactNativeComponent';
import MateriFlexBox from './MateriFlexBox';
import PositionRn from './PositionRn';

const App = () => {
  return (
    <View>
      <ScrollView>
        <PositionRn />
      </ScrollView>
    </View>
  );
};

export default App;
