import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Details from './Details';
import Star from '../UI/Icons/Star';

import './hotel.scss';

const hotel = (props) => {
  const { hotel, scrollPosition, stars, showDetails } = props;
  const attachedClasses = hotel.showDetails ? ['more-info', 'showed'] : ['more-info'];
  return (
    <div className="hotel-container">
      <div className="hotel-image-wrp">
        <LazyLoadImage
          className="hotel-image"
          src={hotel.img}
          scrollPosition={scrollPosition}
        />
      </div>
      <div className="hotel-info">
        <div className="hotel-info-left">
          <div className="hotel-info-title">{hotel.name}</div>
          <div className="hotel-stars">
            {stars.map((star, index) => (
              <div
                key={index}
                className={hotel.rate >= index+1 ? 'hotel-star-filled' : 'hotel-star-empty'}
              ><Star /></div>
            ))}
          </div>
        </div>
        <div className="hotel-info-right">
          <div className="hotel-price">${hotel.price.single}</div>
          <button
            onClick={() => showDetails(hotel.name)}
            className="hotel-details-btn">More</button>
        </div>
      </div>
      <div className={attachedClasses.join(' ')}>
        <Details hotel={hotel}/>
      </div>
    </div>
  )
}
export default hotel;
