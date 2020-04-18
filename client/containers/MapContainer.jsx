import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Park from '../components/park.jsx'
import * as actions from '../actions/actions';
import { connect } from 'react-redux';

// The <Marker /> component accepts a position prop that defines the location for the position on the map. 
  // It can be either a raw object or a google.maps.LatLng() instance.
const mapStyles = {
  width: '100%',
  height: '70%'
}

const mapDispatchToProps = dispatch => ({
  toggle: ()=> dispatch(actions.toggle())
})

class MapContainer extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    console.log('componentDidMount')
    this.props.toggle();  
  }

  render () {
    console.log('mapcontainer?')
    console.log("this.props:", this.props)
    return (
  // Google Map Documentation ------------------------------------
      // Map Properties from Google ----------
      <Map 
        google={this.props.google}
        style={mapStyles} 
        initialCenter={{
          lat: 37.0902,
          lng: -95.7129
        }}
        zoom={4}
      >
        {/* <Marker /> */}

      </Map>
    )
  }  
}

const Connected = connect(null, mapDispatchToProps)(MapContainer);

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCIo2nyEB-966331r5Ux-zO_lKIm7eW5fU'
}) (Connected) 
