import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';

import NavigationBar from './NavigationBar'

const WIDTH = Dimensions.get('window').width;

export default class TeenidolEventDoiQua extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* Navigation */}
        <NavigationBar name={'Quà nhận được'}/>
        {/* Banner */}
        <Image source={require('../resource/ic_banner.png')} style={ styles.banner } />
        {/* Function */}
        <View style={ styles.viewFunction }>
          {/* Title */}
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#0692bc'
  },
  navigation: {
    flex: 2,
    justifyContent:'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  missionText: {
    flex: 9,
    marginLeft: 20,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  xCharacter: {
    marginRight: 20,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  banner: {
    flex: 13,
    width: WIDTH,
    resizeMode: 'cover',
  },
  viewFunction: {
    flex: 10,
    alignItems: 'center',
    backgroundColor: '#020b19'
  },
  rankTop: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf:'center'
  },
  hopQua: {
    flex: 1,
    resizeMode: 'contain'
  },
  giftView: { flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'},
  standarText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold'
  },
  giftImage: {
    width: 45,
    height: 45,
    alignSelf:'center'
  },
  infoView: { flex: 3, width: WIDTH, flexDirection: 'row' },
  infoSubView: { flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  infoText: { color: 'white', fontSize: 16, marginRight: 5 }
});
