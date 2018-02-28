// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########
import PromoCard from './PromoCard';

export default class WinsomeSchool extends Component {
  render() {
    return (
      <section id="winsome-school">
        <h2 className="winsome-school-heading">Winsome Radical School</h2>
        <PromoCard />
      </section>
    );
  }
}

WinsomeSchool.propTypes = {
}