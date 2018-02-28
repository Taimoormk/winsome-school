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
          key={promoData[0].id}
          title={promoData[0].title}
          description={promoData[0].description}
          imageLink={promoData[0].imageLink}
          readMore={promoData[0].readMore}
          imageDirection={promoData[0].imageDirection}
          textDirection={promoData[0].textDirection}
          boxShadow={promoData[0].boxShadow}
        />,
        <PromoCard 
          key={promoData[1].id}
          title={promoData[1].title}
          description={promoData[1].description}
          imageLink={promoData[1].imageLink}
          readMore={promoData[1].readMore}
          imageDirection={promoData[1].imageDirection}
          textDirection={promoData[1].textDirection}
          boxShadow={promoData[1].boxShadow}
        />
      ]
    )
  }

  renderPromoCardsSectionTwo() {
    return (
      [
        <PromoCard 
          key={promoData[2].id}
          title={promoData[2].title}
          description={promoData[2].description}
          imageLink={promoData[2].imageLink}
          readMore={promoData[2].readMore}
          imageDirection={promoData[2].imageDirection}
          textDirection={promoData[2].textDirection}
          boxShadow={promoData[2].boxShadow}
          {...this.props}
        />,
        <PromoCard 
          key={promoData[3].id}
          title={promoData[3].title}
          description={promoData[3].description}
          imageLink={promoData[3].imageLink}
          readMore={promoData[3].readMore}
          imageDirection={promoData[3].imageDirection}
          textDirection={promoData[3].textDirection}
          boxShadow={promoData[3].boxShadow}
          {...this.props}
        />
      ]
    )
  }

  render() {
    let { sectionTwo } = this.props;
    return (
      <section id="winsome-school">
        <h2 className="winsome-school-heading">Winsome Radical School</h2>
        {sectionTwo ? this.renderPromoCardsSectionTwo() : this.renderPromoCards()}
      </section>
    );
  }
}

WinsomeSchool.propTypes = {
}