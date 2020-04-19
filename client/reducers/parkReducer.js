import * as types from '../constants/actionTypes.js';
import { bindActionCreators } from 'redux';
import thunk from 'redux-thunk'
import { connect } from 'react-redux';

const initialState = {
    toggle: true,
    parksList: [{name:'test', latitude: 69, longitude: -96}],
    //lat: 37.7785, lng: -122.4056
    // name: '',
    // position: {
    //     lat: 0,
    //     long: 0,
    // },
    // weather: '', // stretch features
    // description: '', // stretch features
}

const parkReducer = (state = initialState, action)=>{

  switch(action.type) {
    case types.TOGGLE:
      let toggle = !state.toggle;
      // console.log('state.toggle in Park Reducer:', state.toggle)
      return {
      ...state,
      toggle
      };
        
    case types.MARKER:

      const markerData = action.payload.markerData;

      const parksList = [];

      for (let element of markerData) {
          
           const markerState = { 
              name: element.name,
              position: {
                  lat: element.latitude,
                  long: element.longitude,
              },
              // weather: element.weather,
              // description: element.description,
            }
            parksList.push(markerState) ;
      }


      return {
      ...state,
      parksList
    }

    default:
      return state
    }

}



export default parkReducer;