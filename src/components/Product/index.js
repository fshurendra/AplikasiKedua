import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Mackbook from '../../assets/images/jexo-tj7Bj_743JA-unsplash.jpg';

const Product = props => {
  return (
    <View style={styles.wrapper}>
      <Image source={Mackbook} style={styles.image} />
      <Text style={styles.titleProduct}>Mackbook Pro </Text>
      <Text style={styles.price}>Rp.20.000.00 </Text>
      <Text style={styles.location}>Bandung </Text>
      <TouchableOpacity onPress={props.onButtonPress}>
        <View style={styles.buttonWrapper}>
          <Text style={styles.button}>Buy Now</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#F2F2F2',
    padding: 12,
    width: 212,
    borderRadius: 8,
  },
  image: {
    width: 188,
    height: 107,
    borderRadius: 8,
  },
  titleProduct: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 16,
  },
  price: {
    color: 'red',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 6,
  },
  location: {
    fontSize: 12,
    fontWeight: '300',
    marginTop: 12,
  },
  buttonWrapper: {
    backgroundColor: '#6FCF97',
    paddingVertical: 6,
    borderRadius: 25,
    marginTop: 20,
  },
  button: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
});

export default Product;
