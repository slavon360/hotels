import * as actionTypes from '../actions/actionTypes';
import { hotels } from '../../data.json';

const initialState = {
    initHotels: hotels,
    hotels,
    stars: ['0+', '2', '3', '4', '5']
}

const filterHotels = (state, action) => {
    const { initHotels } = state;
    const { rate, hotelName, hasPool } = action;
    const updHotels = initHotels.filter(hotel => hotel.rate === rate && hotel.hasPool === hasPool && hotel.name.includes(hotelName));
    return {
        ...state,
        hotels: updHotels
    }
}

const showDetails = (state, action) => {
    const { hotelName } = action;
    const { hotels } = state;
    const updHotels = hotels.map(hotel => ({
      ...hotel,
      showDetails: hotelName === hotel.name ? !hotel.showDetails : hotel.showDetails,
    }));
    return {
        ...state,
        hotels: updHotels
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.FILTER_HOTELS:
        return filterHotels(state, action);
    case actionTypes.SHOW_DETAILS:
        return showDetails(state, action);
      default: return state;
    }
  };
  
  export default reducer;
