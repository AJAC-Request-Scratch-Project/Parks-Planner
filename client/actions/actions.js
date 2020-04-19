import * as types from '../constants/actionTypes';
import axios from 'axios';
import thunk from "redux-thunk";

export const toggle = () =>({
    type: types.TOGGLE,
})

// Marker for markers rendering on Google Maps -----------------
export const setMarker = (markerData) =>({
    type: types.MARKER,
    payload: markerData
});

// Fetch Request for "marker" ^
// https://blog.logrocket.com/data-fetching-in-redux-apps-a-100-correct-approach-4d26e21750fc/

export const fetchMarkers = () => {
    return (dispatch) => {
        return axios.get('/getparks')
        .then(({ markerData }) => {
            dispatch(setMarker(markerData));
        })
    }
}
// ---------------------------------------------------------------