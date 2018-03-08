// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########
import PromoCard from './PromoCard';
import { promoData } from './promoData';

export default class WinsomeSchool extends Component {

  renderPromoCards() {
    return (
      [
        <PromoCard 
          data={promoData[0]}
          key={promoData[0].id}
        />,
        <PromoCard 
          data={promoData[1]}
          key={promoData[1].id}
        />
      ]
    )
  }

  renderPromoCardsSectionTwo() {
    return (
      [
        <PromoCard 
          data={promoData[2]}
          key={promoData[2].id}
          {...this.props}
        />,
        <PromoCard 
          data={promoData[3]}
          key={promoData[3].id}
          {...this.props}
        />
      ]
    )
  }

  render() {
    let { sectionTwo } = this.props;
    console.log('data', data)
    return (
      <section id="winsome-school">
        <h2 className="winsome-school-heading">{!sectionTwo && "Winsome Radical School"}</h2>
        {sectionTwo ? this.renderPromoCardsSectionTwo() : this.renderPromoCards()}
      </section>
    );
  }
}

WinsomeSchool.propTypes = {
}