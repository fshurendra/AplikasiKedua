import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';

class MateriFlexBox extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            backgroundColor: 'grey',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <View style={{backgroundColor: 'red', width: 50, height: 50}} />
          <View style={{backgroundColor: 'blue', width: 50, height: 50}} />
          <View style={{backgroundColor: 'green', width: 50, height: 50}} />
          <View style={{backgroundColor: 'purple', width: 50, height: 50}} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text>Beranda</Text>
          <Text>Video</Text>
          <Text>Photo</Text>
          <Text>Image</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={{uri: 'https://placeimg.com/150/150/animals'}}
            style={{width: 100, height: 100, borderRadius: 50, margin: 10}}
          />
          <View style={{padding: 10}}>
            <Text style={{fontSize: 18, fontWeight: '700'}}>Nama Disini</Text>
            <Text style={{color: 'red'}}>123.000 Subs</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default MateriFlexBox;
