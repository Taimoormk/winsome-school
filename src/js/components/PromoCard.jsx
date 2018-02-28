// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########
import ReadMoreButton from './ReadMoreButton';

export default class PromoCard extends Component {
  render() {
    return (
      <div id="promo-card">
        <div className="wrapper">
          <div className="promo-card-container">
            <div className="promo-image-container">
              <div className="promo-image">
              </div>
            </div>
            <div className="promo-text-container">
              <div className="promo-text-wrapper">
                <h4 className="promo-heading">Our School</h4>
                <p className="promo-description">We would like to extend a warm welcome to Winsome School System and take a few moments to share our vision with you. We are a healthy, thriving educational community catering to students in Childcare through to Year 10.The school has enjoyed a strong academic achievement record, and an engaging, varied curriculum. The school’s co-curricular activities and unique programs all reinforce our desire to develop the whole child.</p>
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