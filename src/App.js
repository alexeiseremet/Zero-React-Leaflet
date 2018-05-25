import React, {Component} from 'react';
import {Map, TileLayer} from 'react-leaflet';
import {tbl_vehicles as dataVehicles} from './vehicles.json';
import Markers from './Markers';
import Filter from './Filter';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hiddenVehicles: [],
      vehicles      : dataVehicles.slice(0, 50),
      mapCenter     : [6.6111, 20.9394],
      mapZoom       : 4
    };

    this.updateHiddenVehicles = this.updateHiddenVehicles.bind(this);
  }

  /** Delay render */
  recursive = () => {
    setTimeout(() => {
      let hasMore = this.state.vehicles.length + 1000 < dataVehicles.length;
      this.setState((prev) => ({
        vehicles: dataVehicles.slice(0, prev.vehicles.length + 1000)
      }));
      if (hasMore) this.recursive();
    }, 0);
  };

  componentDidMount() {
    this.recursive();
  }

  updateHiddenVehicles(item) {
    const hiddenVehicles = this.state.hiddenVehicles;
    let index = hiddenVehicles.indexOf(item);

    if (index > -1) {
      hiddenVehicles.splice(index, 1);
    } else {
      hiddenVehicles.push(item);
    }

    this.setState({hiddenVehicles})
  }

  render() {
    const activeVehicles = this.state.vehicles.filter(
      v => this.state.hiddenVehicles.indexOf(v.vehicleUniqueId) == -1
    );

    return (
      <div className="dashboard">
        <div className="dashboard__left">
          <Filter vehicles={this.state.vehicles}
                  updateHiddenVehicles={this.updateHiddenVehicles}/>
        </div>
        <div className="dashboard__right">
          <Map center={this.state.mapCenter} zoom={this.state.mapZoom}>
            <TileLayer
              url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
            />

            <Markers vehicles={activeVehicles}/>
          </Map>
        </div>
      </div>
    );
  }
}

export default App
