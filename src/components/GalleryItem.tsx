import React, {useState, useCallback} from 'react';

import {StyleSheet, Text, View, TouchableHighlight, Image} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {ChannelInfo} from '../channels/ChannelData';

const GalleryItem = ({channel}: {channel: ChannelInfo}) => {
  const navigation = useNavigation();

  const [focus, setFocus] = useState(false);

  const onFocus = useCallback(() => {
    setFocus(true);
  }, []);

  const onBlur = useCallback(() => {
    setFocus(false);
  }, []);

  const onPress = () => {
    navigation.navigate('Viewer', {channel});
  };

  return (
    <TouchableHighlight
      onFocus={onFocus}
      onBlur={onBlur}
      style={[styles.wrapper, focus ? styles.wrapperFocused : null]}
      activeOpacity={0.6}
      onPress={onPress}>
      <View style={{display: 'flex'}}>
        {channel.logo ? (
          <Image
            source={require('../../images/kompastv.png')}
            style={{width: 250, height: 100}}
          />
        ) : (
          <Text style={styles.text}>{channel.name}</Text>
        )}
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderColor: 'transparent',
    borderWidth: 5,
    borderRadius: 15,
    marginHorizontal: 10,
    width: 250,
    height: 150,
    backgroundColor: 'black',
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    justifyItems: 'center',
  },
  wrapperFocused: {
    borderColor: 'rgb(232, 65, 175)',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    justifyItems: 'center',
  },
});

export default GalleryItem;
