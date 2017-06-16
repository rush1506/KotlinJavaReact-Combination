import React, { Component } from 'react';

import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';

import { Actions, ActionConst } from 'react-native-router-flux';

import NavigationBar from './NavigationBar'

import Banner from './Banner'

const WIDTH = Dimensions.get('window').width;



export default class TeenidolEvent extends Component {

  onClickX(){

  }

  onClickQua(){
  }

  onClickDoiQua(){
    Actions.eventDoiqua();
  }

  onClickBiNgo(){

  }

  render() {
    return (
      <View style={styles.container}>
        {/* Navigation */}
        <NavigationBar name={'Nhiệm vụ'}/>
        {/* Banner */}
        <Banner link={'../resource/ic_banner.png'}/>
        {/* Function */}
        <View style={ styles.viewFunction }>
          {/* Title */}
          <View style={{ flex: 1 }}>
            <Text style={ styles.rankTop }>BẢNG XẾP HẠNG HÔM NAY</Text>
            <View style={{ backgroundColor: '#056379', width: 270, height: 2, marginTop: 10 }}></View>
          </View>
          {/* Progress */}
          <View style={{ flex: 3, width: WIDTH, flexDirection: 'row', alignItems: 'center' }}>
            {/* Sub Progress */}
            <View style={{ flex: 2, flexDirection: 'column', alignItems: 'center' }}>

              <View style={{ flex: 2, flexDirection: 'row' }}>
                {/* Left candy */}
                <View style={ styles.giftView }>
                  <Image source={require('../resource/ic_keo.png')} style={ styles.giftImage }/>
                  <Text style={ styles.standarText }>400</Text>
                </View>
                {/* Separator */}
                <View style={{ width: 2, height: 40, backgroundColor: '#02647a', marginTop: 15, left: 5 }}></View>
              {/* Cup */}
                <View style={ styles.giftView }>
                  <Image source={require('../resource/ic_cup.png')} style={ styles.giftImage }/>
                  <Text style={ styles.standarText }>400</Text>
                </View>
              </View>
              {/* progress bar */}
              <Image source={require('../resource/ic_progressall.png')} style={{ flex: 1, resizeMode: 'contain', margin: 5, width: 220, padding: 2 }}>
                <Image source={require('../resource/ic_currentprogess.png')} style={{ flex: 1, resizeMode: 'contain', width: 100 }}/>
              </Image>
            </View>
            {/* Hộp quà */}
            <TouchableOpacity style={{ flex: 1, alignItems: 'center' }}
              onPress={this.onClickQua}>
              <Image source={require('../resource/ic_gift.png')} style={ styles.hopQua } />
            </TouchableOpacity>
          </View>
          {/* Gift */}
          <View style={ styles.infoView }>

            <View style={ styles.infoSubView }>
              <Image source={require('../resource/ic_manhthuytinh.png')} style={{ flex: 1, height: 45, width: 45, marginLeft: 8 }}/>
              <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.infoText }>Mảnh thủy tinh</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 5  }}>
                  <Text style={styles.infoText }>123456</Text>
                  <TouchableOpacity style={{ width: 50, height: 20 }}
                    onPress={this.onClickDoiQua}>
                    <Image source={require('../resource/ic_doiqua.png')} style={{ width: 50, height: 20, resizeMode: 'stretch' }} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {/* Separator */}
            <View style={{ width: 2, height: 50, backgroundColor: '#02647a', marginTop: 35 }}></View>
            <View style={styles.infoSubView }>
              <Image source={require('../resource/ic_bingo.png')} style={{ flex: 1, height: 45, width: 45, marginLeft: 8 }}/>
              <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.infoText }>Xe bí ngô</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 5 }}>
                  <Text style={styles.infoText }>123456</Text>
                  <TouchableOpacity style={{ width: 50, height: 20 }}
                    onPress={this.onClickBiNgo}>
                    <Image source={require('../resource/ic_vuongmieng.png')} style={{ width: 50, height: 20, resizeMode: 'stretch' }} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
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
