import React, {Component} from 'react';
import {Map, TileLayer} from 'react-leaflet';
import Markers from './Markers';
import Filter from './Filter';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hiddenVehicles: [],
      vehicles      : [],
      isLoading     : true,
      mapCenter     : [6.6111, 20.9394],
      mapZoom       : 4
    };

    this.updateHiddenVehicles = this.updateHiddenVehicles.bind(this);
  }

  fetchData = () => {
    fetch('./vehicles.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          vehicles: data.tbl_vehicles,
          isLoading: false
        });
      });
  };

  componentDidMount() {
    /** Delay fetch data */
    setTimeout(() => {
      this.fetchData();
    }, 100)
  }

  updateHiddenVehicles(item) {
    const hiddenVehicles = [...this.state.hiddenVehicles];
    const index = hiddenVehicles.indexOf(item);

    index > -1
      ? hiddenVehicles.splice(index, 1)
      : hiddenVehicles.push(item);

    this.setState({hiddenVehicles})
  }

  render() {
    const activeVehicles = this.state.vehicles.filter(
      v => this.state.hiddenVehicles.indexOf(v.vehicleUniqueId) == -1
    );

    return (
      <div className="dashboard">
        <div className="dashboard__left">
          {
            this.state.isLoading
              ? <p>...loading</p>
              : <Filter vehicles={this.state.vehicles}
                        updateHiddenVehicles={this.updateHiddenVehicles}/>
          }
        </div>
        <div className="dashboard__right">
          <Map center={this.state.mapCenter} zoom={this.state.mapZoom}>
            <TileLayer
              url="//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
            />

            {
              this.state.isLoading
                ? null
                : <Markers vehicles={activeVehicles}/>
            }
          </Map>
        </div>
      </div>
    );
  }
}

export default App
