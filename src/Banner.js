/* @flow */

import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  Text
} from 'react-native';
import {Actions} from 'react-native-router-flux'
const WIDTH = Dimensions.get('window').width;

const Banner = (props) => {
  return (
    <Image source={require('../resource/ic_banner.png')} style={ styles.banner } />
  );
};

const styles = StyleSheet.create({
  banner: {
    flex: 13,
    width: WIDTH,
    resizeMode: 'cover',
  }
});

export default Banner;
