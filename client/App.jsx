import React from 'react';
import Connected from './containers/mapContainer.jsx';
import MapContainer from './containers/mapContainer.jsx';

// (Optional) import stylesheet here.
// import './stylesheets/styles.css';

class App extends React.Component {
  constructor(props){
    super(props)
  }

  render () {
    return (
      <div id='main'>
        <MapContainer />
      </div>
    )
  }
}


export default App;