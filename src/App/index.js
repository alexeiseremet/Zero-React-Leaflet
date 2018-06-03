import React, {Component} from 'react';
import {Map, TileLayer} from 'react-leaflet';
import Markers from '../Markers/';
import Filter from '../Filter/';
import './styles.css';

class App extends Component {
  shouldComponentUpdate () {
    return false
  }

  render() {
    return (
      <div className="dashboard">
        <div className="dashboard__left">
          <Filter/>
        </div>
        <div className="dashboard__right">
          <Map center={[6.6111, 20.9394]} zoom={4}>
            <TileLayer
              url="//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
            />

            <Markers/>
          </Map>
        </div>
      </div>
    );
  }
}

export default App
