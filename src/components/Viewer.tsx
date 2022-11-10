import React, {useCallback, useEffect, useState} from 'react';

import {Alert, Dimensions} from 'react-native';

import YoutubePlayer from 'react-native-youtube-iframe';
import {WebView} from 'react-native-webview';

import {useRoute} from '@react-navigation/native';
import {ChannelDataMedium} from '../channels/ChannelData';

const {width, height} = Dimensions.get('window');

const Screen2 = ({}) => {
  const route = useRoute();

  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);

  const onVideoBuffer = () => {
    console.log('Bufferring');
  };

  const onVideoError = error => {
    console.log('Error', error);
  };

  const renderPlayer = () => {
    switch (route.params?.channel?.medium) {
      case ChannelDataMedium.YOUTUBE:
        return (
          <YoutubePlayer
            height={height}
            width={width}
            play={playing}
            videoId={route.params?.channel?.videoid || ''}
            onChangeState={onStateChange}
            forceAndroidAutoplay={true}
          />
        );
      case ChannelDataMedium.WEBVIDEO:
        return (
          <WebView
            startInLoadingState={true}
            style={{}}
            source={{
              uri: 'https://www.dailymotion.com/embed/video/x6p1gw7?autoplay=1&related=0&queue-enable=false',
            }}
          />
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    togglePlaying();
    return () => {
      setPlaying(false);
    };
  });

  return renderPlayer();
};

export default Screen2;

// r26kwlv4
// r26kwz6v
