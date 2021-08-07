import React from 'react';
import {Image, View, Text, StyleSheet, ScrollView} from 'react-native';

const Story = props => {
  return (
    <View style={styles.mainPositionStory}>
      <Image source={{uri: props.gambar}} style={styles.image} />
      <Text style={styles.title}>{props.judul}</Text>
    </View>
  );
};

const PropsDinamis = () => {
  return (
    <View>
      <Text style={styles.mainJudul}>
        Materi Component Dinamis dengan Props
      </Text>
      <ScrollView horizontal>
        <View style={styles.positionStory}>
          <Story
            gambar="https://instagram.fcgk9-1.fna.fbcdn.net/v/t51.2885-15/e35/c45.700.1035.1035a/s150x150/223684003_918050965590118_7339427253530585959_n.jpg?_nc_ht=instagram.fcgk9-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=FlqqUbNOIb4AX-XiysI&edm=AGW0Xe4BAAAA&ccb=7-4&oh=91a1d21a14fcc9181fc79fc9a52d006f&oe=61102E93&_nc_sid=acd11b"
            judul="Story ke satu ini teh"
          />
          <Story
            gambar="https://instagram.fcgk9-2.fna.fbcdn.net/v/t51.2885-15/s150x150/205550789_125829726356209_3280720611510867325_n.jpg?_nc_ht=instagram.fcgk9-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=EhJDRAhqbHMAX-S3oua&edm=AGW0Xe4BAAAA&ccb=7-4&oh=1aea935c34eb258ac12ea3c69afc21c8&oe=611541A2&_nc_sid=acd11b"
            judul="Story ke dua ini teh"
          />
          <Story
            gambar="https://instagram.fcgk9-1.fna.fbcdn.net/v/t51.2885-15/e35/c45.700.1035.1035a/s150x150/223684003_918050965590118_7339427253530585959_n.jpg?_nc_ht=instagram.fcgk9-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=FlqqUbNOIb4AX-XiysI&edm=AGW0Xe4BAAAA&ccb=7-4&oh=91a1d21a14fcc9181fc79fc9a52d006f&oe=61102E93&_nc_sid=acd11b"
            judul="Story ke satu ini teh"
          />
          <Story
            gambar="https://instagram.fcgk9-2.fna.fbcdn.net/v/t51.2885-15/s150x150/205550789_125829726356209_3280720611510867325_n.jpg?_nc_ht=instagram.fcgk9-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=EhJDRAhqbHMAX-S3oua&edm=AGW0Xe4BAAAA&ccb=7-4&oh=1aea935c34eb258ac12ea3c69afc21c8&oe=611541A2&_nc_sid=acd11b"
            judul="Story ke dua ini teh"
          />
          <Story
            gambar="https://instagram.fcgk9-1.fna.fbcdn.net/v/t51.2885-15/e35/c45.700.1035.1035a/s150x150/223684003_918050965590118_7339427253530585959_n.jpg?_nc_ht=instagram.fcgk9-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=FlqqUbNOIb4AX-XiysI&edm=AGW0Xe4BAAAA&ccb=7-4&oh=91a1d21a14fcc9181fc79fc9a52d006f&oe=61102E93&_nc_sid=acd11b"
            judul="Story ke satu ini teh"
          />
          <Story
            gambar="https://instagram.fcgk9-2.fna.fbcdn.net/v/t51.2885-15/s150x150/205550789_125829726356209_3280720611510867325_n.jpg?_nc_ht=instagram.fcgk9-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=EhJDRAhqbHMAX-S3oua&edm=AGW0Xe4BAAAA&ccb=7-4&oh=1aea935c34eb258ac12ea3c69afc21c8&oe=611541A2&_nc_sid=acd11b"
            judul="Story ke dua ini teh"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PropsDinamis;

const styles = StyleSheet.create({
  mainPositionStory: {alignItems: 'center', marginRight: 20},
  mainJudul: {
    color: 'blue',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
  },
  image: {width: 70, height: 70, borderRadius: 70 / 2},
  title: {maxWidth: 50, textAlign: 'center'},
  positionStory: {flexDirection: 'row'},
});
