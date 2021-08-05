import React from 'react';
import {ScrollView, View} from 'react-native';
import StylingReactNativeComponent from './StylingReactNativeComponent';
import MateriFlexBox from './MateriFlexBox';

const App = () => {
  return (
    <View>
      <ScrollView>
        <MateriFlexBox />
      </ScrollView>
    </View>
  );
};

export default App;
