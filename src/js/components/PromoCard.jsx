// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########
import ReadMoreButton from './ReadMoreButton';

export default class PromoCard extends Component {
  render() {
    let { sectionTwo } = this.props;
    console.log('lets see', this.props);
    return (
      <div id="promo-card">
        <div className="wrapper">
          <div className={`promo-card-container-${sectionTwo ? "sectionTwo-" : ""}${this.props.imageDirection}`}>
            <div className={`promo-image-container-${sectionTwo ? "sectionTwo-" : ""}${this.props.imageDirection}`}>
              <div className={`promo-image-${sectionTwo ? "sectionTwo-" : ""}${this.props.imageDirection}`}>
              </div>
            </div>
            <div className="promo-text-container">
              <div className="promo-text-wrapper">
                <h4 className={`promo-heading-${sectionTwo ? "sectionTwo-" : ""}${this.props.textDirection}`}>{this.props.title}</h4>
                <p className={`promo-description-${sectionTwo ? "sectionTwo-" : ""}${this.props.textDirection}`}>{this.props.description}</p>
                <ReadMoreButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PromoCard.propTypes = {
}