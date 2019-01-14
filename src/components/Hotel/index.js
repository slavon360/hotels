import React, { Component } from 'react';
import cx from 'classnames';
import Details from './Details';
import Preloader from '../UI/Preloader';
import Star from '../UI/Icons/Star';

import './hotel.scss';

class Hotel extends Component{
  state = {
    loaded: false
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.hotel.showDetails !== nextProps.hotel.showDetails || this.state.loaded !== nextState.loaded;
  }
  onShowDetails = () => {
    const { hotel: { name }, showDetails } = this.props;
    showDetails(name);
  }
  onImgLoad = () => {
    console.log('loaded!');
    this.setState({ loaded: true })
  }
  render() {
    const { hotel, scrollPosition, stars, showDetails } = this.props;
    const { loaded } = this.state;
    console.log('hotel render: ', hotel.name)
    return (
      <div className="hotel-container">
        <div className="hotel-image-wrp">
          <img
            className={cx('hotel-image', { 'hidden': !loaded })}
            src={hotel.img}
            onLoad={this.onImgLoad}
          />
          {!loaded &&
          <Preloader />
          }
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
              onClick={this.onShowDetails}
              className="hotel-details-btn">More</button>
          </div>
        </div>
        <div className={cx('more-info', { 'showed': hotel.showDetails })}>
          <Details hotel={hotel}/>
        </div>
      </div>
    )
  }
}
export default Hotel;
