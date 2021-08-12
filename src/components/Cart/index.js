import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import cart from '../../assets/icons/shopping-cart.png';

const Cart = props => {
  return (
    <View style={styles.container}>
      <View style={styles.cartWrapper}>
        <Image source={cart} style={styles.iconCart} />
        <Text style={styles.notif}>{props.quantity}</Text>
      </View>
      <Text style={styles.text}>Keranjang Belanjaan Anda</Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {padding: 20, alignItems: 'center'},
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
  iconCart: {width: 50, height: 50},
  text: {fontSize: 12, fontWeight: '700', color: 'grey', paddingTop: 8},
  notif: {
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
});
