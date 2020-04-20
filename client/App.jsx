import React from 'react';
import Connected from './containers/mapContainer.jsx';
import MapContainer from './containers/mapContainer.jsx';
import Park from './components/park.jsx'
import { connect } from 'react-redux';


// (Optional) import stylesheet here.
import './stylesheets/styles.scss';

const mapStateToProps = state => ({
  showPark: state.park.showPark,
})

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id='main'>
        <h1>🌲  Parks Planner  🌲</h1>
        <hr></hr>
        <MapContainer />
        <div id="innerBox">
          {this.props.showPark ?
            <Park />
            : <div id="innerBox"><b>Select a park to view info!</b></div>}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(App);
