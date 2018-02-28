// ########## Import Dependencies Here ##########
import React, { Component } from 'react';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########
import WinsomeSchool from './WinsomeSchool';
import JuniorSchool from './JuniorSchool';

export default class App extends Component {
  render() {
    return (
      <div>
        <WinsomeSchool />
        <JuniorSchool />
      </div>
    );
  }
}