import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Illustration from '../../assets/illustrasi/undraw_Asset_selection_re_k5fj.svg';

const ReactNativeSvg = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Materi Menggunakan File SVG di Dalam React Native
      </Text>
      <Illustration width={244} height={125} />
    </View>
  );
};

export default ReactNativeSvg;

const styles = StyleSheet.create({
  container: {padding: 20, alignItems: 'center'},
  title: {textAlign: 'center'},
});
