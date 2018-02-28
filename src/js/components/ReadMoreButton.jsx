// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########

export default class ReadMoreButton extends Component {
  render() {
    return (
      <div id="read-more-button">
        <div className="read-more-button">
          <p className="read-more-button-text">
            Read More
          </p>
        </div>
      </div>
    );
  }
}

ReadMoreButton.propTypes = {
}