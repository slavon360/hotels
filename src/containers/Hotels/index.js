import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/hotels'
import Filters from '../../components/Filters';
import HotelsList from '../../components/HotelsList';

import './hotels.scss';

class Hotels extends Component{
  state = {
    rate: '3',
    hasPool: 'false',
    hotelName: '',
  }
  componentDidMount () {
    const { rate, hasPool, hotelName } = this.state;
    this.props.filterHotels({ rate, hasPool, hotelName });
  }
  filterHotelsByRate = (val) => {
    const { hasPool, hotelName } = this.state;
    this.setState({ rate: val }, () => {
      this.props.filterHotels({ rate: val, hasPool, hotelName });
    });
  }
  filterHotelsByPool = (val) => {
    const { rate, hotelName } = this.state;
    this.setState({ hasPool: val }, () => {
      this.props.filterHotels({ rate, hasPool: val, hotelName });
    });
  }
  filterHotelsByName = (name) => {
    const { rate, hasPool } = this.state;
    this.setState({ hotelName: name }, () => {
      this.props.filterHotels({ rate, hasPool, hotelName: name });
    });
  }
  render () {
    const { rate, hotelName } = this.state;
    const { showDetails, hotels, stars } = this.props;
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
            showDetails={showDetails}
            hotels={hotels || []}
            stars={stars}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ hotels, stars }) => ({
  hotels,
  stars
});

const mapDispatchToProps = (dispatch) => ({
  filterHotels: (filters) => {
    dispatch(actions.filterHotels(filters));
  },
  showDetails: (hotelName) => {
    dispatch(actions.showDetails(hotelName));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Hotels);
