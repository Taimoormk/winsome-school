// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########
import ReadMoreButton from './ReadMoreButton';

export default class PromoCard extends Component {
  render() {
    let { sectionTwo, data } = this.props;
    console.log('lets see', this.props);
    return (
      <div id="promo-card">
        <div className="wrapper">
          <div className={`promo-card-container-${data.id > 2 && "sectionTwo-" || data.id <= 2 && "sectionOne-"}${data.imageDirection}`}>
            <div className={`promo-image-container-${data.id > 2 && "sectionTwo-" || data.id <= 2 && "sectionOne-"}${data.imageDirection}`}>
              <div className={`promo-image-${data.id > 2 && "sectionTwo-" || data.id <= 2 && "sectionOne-"}${data.imageDirection}`}>
              </div>
            </div>
            <div className="promo-text-container">
              <div className="promo-text-wrapper">
                <h4 className="promo-heading">{data.title}</h4>
                <p className="promo-description">{data.description}</p>
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