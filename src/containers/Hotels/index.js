import React, { Component } from 'react';
import { trackWindowScroll } from 'react-lazy-load-image-component';
import Filters from '../../components/Filters';
import HotelsList from '../../components/HotelsList';
import { hotels } from '../../../data.json';

import './hotels.scss';

class Hotels extends Component{
  state = {
    initHotels: hotels,
    hotels,
    stars: ['0+', '2', '3', '4', '5'],
    rate: '3',
    hasPool: 'false',
    hotelName: '',
  }
  componentDidMount () {
    const { rate } = this.state;
    this.filterHotelsByRate(rate);
  }
  showDetails = (hotelName) => {
    let { hotels } = this.state;
    const updHotels = hotels.map(hotel => ({
      ...hotel,
      showDetails: hotelName === hotel.name ? !hotel.showDetails : hotel.showDetails,
    }));
    this.setState({ hotels: updHotels });
  }
  filterHotelsByRate = (val) => {
    let { initHotels, hasPool, hotelName } = this.state;
    const updHotels = initHotels.filter(hotel => hotel.rate === val && hotel.hasPool === hasPool && hotel.name.includes(hotelName));
    this.setState({ hotels: updHotels, rate: val });
  }
  filterHotelsByPool = (val) => {
    const { initHotels, rate, hotelName } = this.state;
    const updHotels = initHotels.filter(hotel => hotel.hasPool === val && hotel.rate === rate && hotel.name.includes(hotelName));
    this.setState({ hotels: updHotels, hasPool: val });
  }
  filterHotelsByName = (name) => {
    const { initHotels, rate, hasPool } = this.state;
    const updHotels = initHotels.filter(hotel => hotel.name.includes(name) && hotel.hasPool === hasPool && hotel.rate === rate);
    this.setState({ hotels: updHotels, hotelName: name });
  }
  render () {
    const { hotels, stars, rate, hotelName } = this.state;
    const { scrollPosition } = this.props;
    return (
      <div className="hotels-wrp">
        <div className="left-side-filters">
          <Filters
            filterHotelsByRate={this.filterHotelsByRate}
            filterHotelsByPool={this.filterHotelsByPool}
            filterHotelsByName={this.filterHotelsByName}
            hotelName={hotelName}
            stars={stars}
            rate={rate}
          />
        </div>
        <div className="right-side-hotels">
          <HotelsList
            scrollPosition={scrollPosition}
            showDetails={this.showDetails}
            hotels={hotels || []}
            stars={stars}
          />
        </div>
      </div>
    )
  }
}

export default trackWindowScroll(Hotels);
