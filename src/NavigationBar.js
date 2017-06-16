/* @flow */

import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from 'react-native';
import {Actions} from 'react-native-router-flux'

const NavigationBar = (props) => {
  return (
    <View style={styles.navigation}>
      <Text style={ styles.missionText }>{props.name}</Text>
      <TouchableOpacity style={{ flex: 1 }}
        onPress={Actions.close}>
        <Text style={ styles.xCharacter }>x</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
  }
});

export default NavigationBar;
