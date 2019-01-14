import * as actionTypes from './actionTypes';

export const filterHotels = ({ rate, hotelName, hasPool }) => ({
    rate,
    hotelName,
    hasPool,
    type: actionTypes.FILTER_HOTELS
});

export const showDetails = (hotelName) => ({
    hotelName,
    type: actionTypes.SHOW_DETAILS
});
