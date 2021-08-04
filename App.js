import React from 'react';
import {Image, Text, TextInput, View} from 'react-native';

const App = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#0abde3'}} />
      <Text>Nama Satu</Text>
      <Fauzi />
      <Text>Nama Deua</Text>
      <Text>Nama Tiga</Text>
      <Gamber />
      <TextInput style={{borderWidth: 1}} />
    </View>
  );
};

const Fauzi = () => {
  return <Text>Fauzis</Text>;
};

const Gamber = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/640/480/tech'}}
      style={{width: 100, height: 100}}
    />
  );
};

export default App;
