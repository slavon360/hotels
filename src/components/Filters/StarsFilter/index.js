import React from 'react';
import PropTypes from 'prop-types';
import Star from '../../UI/Icons/Star';

import './stars-filter.scss';

const starsFilter = ({stars, rate, filterHotelsByRate}) => (
  <div className="stars-filter-wrp">
    <div className="stars-title">Stars</div>
    <div className="stars-wrp">
      {stars.map((value, index) => {
        const attachedClasses = rate > index ? ['star', 'star-checked'] : ['star', 'star-unchecked'];
        const number = '' + (index + 1);
        return (<button onClick={() => filterHotelsByRate(number)} key={index} className={attachedClasses.join(' ')}>
          <div className="star-value">{value}</div>
          <Star />
        </button>)
      })}
    </div>
  </div>
)

starsFilter.propTypes = {
  stars: PropTypes.arrayOf(PropTypes.string),
  rate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])
}

export default starsFilter;
