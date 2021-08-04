import React, {Component} from 'react';
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
      <BoxGreen />
      <Photo />
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

class BoxGreen extends Component {
  render() {
    return <Text>Ini Component dari Class</Text>;
  }
}

class Photo extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://placeimg.com/100/100/arch'}}
          style={{width: 120, height: 120, borderRadius: 70}}
        />
        <Text style={{color: 'red', fontSize: 22}}>
          Ini Foto Class Component
        </Text>
      </View>
    );
  }
}

export default App;
