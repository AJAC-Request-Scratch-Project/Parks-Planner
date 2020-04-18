import * as types from '../constants/actionTypes.js';
import { bindActionCreators } from 'redux';
import thunk from 'redux-thunk'
import { connect } from 'react-redux';

const initialState = {
    toggle: true,
}

const parkReducer = (state = initialState, action)=>{

    switch(action.type) {
        case types.TOGGLE:
            let toggle = !state.toggle;
            console.log('state.toggle in Park Reducer:', state.toggle)
        return {
            ...state,
            toggle
        }

        default:
          return state
    }

}



export default parkReducer;