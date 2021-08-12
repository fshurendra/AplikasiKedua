import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <View>
      <Text>{number}</Text>
      <Button title="Tambah Deui" onPress={() => setNumber(number + 1)} />
    </View>
  );
};

const StateDinamis = () => {
  return (
    <View style={Styles.wrapper}>
      <Text style={Styles.textTitle}>Materi Dinamis dengan State</Text>
      <Counter />
    </View>
  );
};

export default StateDinamis;

const Styles = StyleSheet.create({
  wrapper: {padding: 20},
  textTitle: {textAlign: 'center', fontWeight: 'bold'},
});
