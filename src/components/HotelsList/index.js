import React from 'react';
import Hotel from '../Hotel';

import './hotels-list.scss';

const hotelsList = ({hotels, stars, scrollPosition, showDetails}) => (
  hotels.length ? hotels.map((hotel, index) => (<div
    className="hotel-wrp"
    key={hotel.name}>
    <Hotel hotel={hotel} stars={stars} scrollPosition={scrollPosition} showDetails={showDetails} />
  </div>)) : <div className="not-exists">No such hotels</div>
);

export default hotelsList;
