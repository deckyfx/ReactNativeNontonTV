import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import GalleryItem from './GalleryItem';
import ChannelData from '../channels/ChannelData';

const Gallery = ({}) => {
  return (
    <ScrollView horizontal style={styles.row}>
      {ChannelData.map((item, i) => (
        <GalleryItem key={i} channel={item} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  row: {
    marginBottom: 50,
  },
});

export default Gallery;
