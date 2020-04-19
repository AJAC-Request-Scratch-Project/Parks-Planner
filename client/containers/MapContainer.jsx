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

const mapStateToProps = state => ({
  parksList: state.park.parksList,
  toggle: state.park.toggle,
})


const mapDispatchToProps = dispatch => ({
  toggle: ()=> dispatch(actions.toggle()),
  fetchMarkers: () => dispatch(actions.fetchMarkers()),
})

class MapContainer extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.toggle();
    this.props.fetchMarkers();
  }

  render () {

    // create empty array for markers
    const markersArray = []
    //loop through state.parksList to get all relevant info for marker component

    for(let i = 0; i < this.props.parksList.length; i++){
      console.log(this.props.parksList)
      markersArray.push(<Marker
        key={'marker'+i}
        name={this.props.parksList[i].name}
        position={{
        lat: this.props.parksList[i].position.lat,
        lng: this.props.parksList[i].position.long,
        }}
        />)
    }

    //push each component into above array
    
    if (!this.props.toggle){
      return (
        <h1>Loading..</h1>
      )
    } else {
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
      {markersArray}

      </Map>
      )
  }  
}
}

const Connected = connect(mapStateToProps, mapDispatchToProps)(MapContainer);

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCIo2nyEB-966331r5Ux-zO_lKIm7eW5fU'
}) (Connected) 
