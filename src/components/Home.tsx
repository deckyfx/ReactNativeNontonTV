import React from 'react';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {StyleSheet, View} from 'react-native';

import Gallery from './Gallery';

import AppLayout from './AppLayout';

const Home = () => {
  return (
    <AppLayout>
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Gallery />
          {/*
          <Gallery />
          <Gallery />
          <Gallery />
          */}
        </View>
      </View>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default Home;
