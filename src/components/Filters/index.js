import React from 'react';
import StarsFilter from './StarsFilter';
import Search from '../UI/Icons/Search';

import './filters.scss';

const filters = ({stars, rate, hotelName, filterHotelsByRate, filterHotelsByPool, filterHotelsByName}) => (
  <div className="filters-wrp">
    <StarsFilter filterHotelsByRate={filterHotelsByRate} stars={stars} rate={rate} />
    <div className="pool">
      <input
        type="checkbox"
        id="pool"
        onChange={(event) => filterHotelsByPool('' + event.target.checked)}
      />
      <label htmlFor="pool">Has Pool</label>
    </div>
    <div className="hotel-name-wrp">
      <div className="hotel-name-title">Hotel Name</div>
      <input type="text" value={hotelName} onChange={(event) => filterHotelsByName(event.target.value)} placeholder="Hotel Name" />
      <div className="search-icon"><Search /></div>
    </div>
  </div>
);

export default filters;
