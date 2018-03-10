// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########
import PromoCard from './PromoCard';

export default class WinsomeSchool extends Component {

  renderPromoCardsSectionOne() {
    let { promoData } = this.props;
    return (
      [
        <PromoCard 
          data={promoData[0].promoDataOne}
          key={promoData[0].promoDataOne.promoCardId}
        />,
        <PromoCard 
          data={promoData[0].promoDataTwo}
          key={promoData[0].promoDataTwo.promoCardId}
        />
      ]
    )
  }

  renderPromoCardsSectionTwo() {
    let { promoData } = this.props;
    return (
      [
        <PromoCard 
          data={promoData[1].promoDataThree}
          key={promoData[1].promoDataThree.promoCardId}
        />,
        <PromoCard 
          data={promoData[1].promoDataFour}
          key={promoData[1].promoDataFour.promoCardId}
        />
      ]
    )
  }

  render() {
    let { promoData, id } = this.props;
    return (
      <section id="winsome-school">
        <h2 className="winsome-school-heading">{id === 2 && promoData[1].heading || id === 1 && promoData[0].heading }</h2>
        {id === 2 && this.renderPromoCardsSectionTwo() || id === 1 && this.renderPromoCardsSectionOne()}
      </section>
    );
  }
}

WinsomeSchool.propTypes = {
  promoData: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
}