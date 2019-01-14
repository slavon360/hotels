import React, { Fragment } from 'react';

import './details.scss';

const details = ({hotel}) => (
  <Fragment>
    <div className="hotel-address">Address:</div>
    <div className="hotel-address">{hotel.address}</div>
    <div className="hotel-description">{hotel.description}</div>
    <div className="hotel-has-pool">
      <span className="hotel-pool-label">Pool: </span>
      <span className="hotel-pool-value">{hotel.hasPool === 'true' ? ' Yes' : ' No'}</span>
    </div>
  </Fragment>
)

export default details;
