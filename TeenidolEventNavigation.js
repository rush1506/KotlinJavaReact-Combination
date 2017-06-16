/* @flow */

import React, { Component } from 'react';
import {Scene, Router} from 'react-native-router-flux';

import TeenidolEvent from './src/TeenidolEvent'
import TeenidolEventDoiQua from './src/TeenidolEventDoiQua'

export default class TeenidolEventNavigation extends Component {
  render() {
    return <Router>
      <Scene key="root">
        <Scene key="event" component={TeenidolEvent}
        hideNavBar = {true}
        initial={true}/>
        <Scene key="eventDoiqua" component={TeenidolEventDoiQua}
        hideNavBar = {true}/>
      </Scene>
    </Router>
  }
}
