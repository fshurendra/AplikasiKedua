import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Mackbook from '../../assets/images/jexo-tj7Bj_743JA-unsplash.jpg';

const StylingComponent = () => {
  return (
    <View>
      <Text style={styles.judul}>Styling Component</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'purple',
          borderColor: 'red',
          borderWidth: 4,
          marginTop: 30,
          marginLeft: 50,
        }}
      />
      <View
        style={{
          backgroundColor: '#F2F2F2',
          padding: 12,
          width: 212,
          borderRadius: 8,
        }}>
        <Image
          source={Mackbook}
          style={{width: 188, height: 107, borderRadius: 8}}
        />
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: 'black',
            marginTop: 16,
          }}>
          Mackbook Pro
        </Text>
        <Text style={{color: 'red', fontSize: 12}}>Rp.20.000.00</Text>
        <Text style={{fontSize: 10, fontWeight: '300', marginTop: 11}}>
          Bandung
        </Text>
        <View
          style={{
            backgroundColor: '#6FCF97',
            paddingVertical: 6,
            borderRadius: 25,
            marginTop: 6,
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}>
            Buy Now
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  judul: {fontSize: 20, color: '#03e', marginTop: 30, marginLeft: 50},
});

export default StylingComponent;
