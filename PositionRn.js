import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import Cart from './shopping-cart.png';

const PositionRn = () => {
  return (
    <View style={styles.wrapper}>
      <Text>Materi Position</Text>
      <View style={styles.cartWrapper}>
        <Image source={Cart} style={styles.iconCart} />
        <Text style={styles.total}>10</Text>
      </View>
      <Text style={styles.text}>Keranjang Belanjaan Anda</Text>
    </View>
  );
};

export default PositionRn;

const styles = StyleSheet.create({
  wrapper: {padding: 20, alignItems: 'center'},
  cartWrapper: {
    borderWidth: 1,
    borderColor: '#439001',
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginTop: 40,
  },
  total: {
    fontSize: 12,
    color: 'white',
    backgroundColor: 'blue',
    borderRadius: 25,
    width: 24,
    height: 24,
    padding: 4,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  iconCart: {width: 50, height: 50},
  text: {fontSize: 12, fontWeight: '700', color: 'grey', paddingTop: 8},
});
