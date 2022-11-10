export const ChannelDataMedium = {
  YOUTUBE: 'yt',
  WEBVIDEO: 'wv',
};

export interface ChannelInfo {
  name: string;
  medium: 'yt' | 'wv';
  videoid?: string;
  url?: string;
  logo?: string;
}

const ChannelData = [
  {
    name: 'TV One',
    medium: ChannelDataMedium.YOUTUBE,
    videoid: 'yNKvkPJl-tg',
  },
  {
    name: 'Metro TV',
    medium: ChannelDataMedium.YOUTUBE,
    videoid: 'WkpxPTZ2BPw',
  },
  {
    name: 'Kompas TV',
    medium: ChannelDataMedium.YOUTUBE,
    videoid: 'Za5-fvwbPJI',
    logo: './images/kompastv',
  },
  {
    name: 'ANTV TV',
    medium: ChannelDataMedium.WEBVIDEO,
    videoid: 'x8chy4s',
    url: 'https://www.dailymotion.com/embed/video/x8chy4s?autoplay=1&related=0&queue-enable=false',
  },
  {
    name: 'Trans 7',
    medium: ChannelDataMedium.WEBVIDEO,
    videoid: 'x6p1gw7',
    url: 'https://www.dailymotion.com/embed/video/x6p1gw7?autoplay=1&related=0&queue-enable=false',
  },
  {
    name: 'Trans TV',
    medium: ChannelDataMedium.WEBVIDEO,
    videoid: 'x8blyd07',
    url: 'https://www.dailymotion.com/video/x8blyd07?autoplay=1&related=0&queue-enable=false',
  },
];

export default ChannelData;
