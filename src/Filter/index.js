// component & container

import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {loadVehicles, updateHiddenVehicles} from './actions'
import FilterItem from './_item';
import './styles.css';

class Filter extends Component {
  componentDidMount() {
    fetch('./vehicles.json')
      .then(res => res.json())
      .then(data => (
        this.props.loadVehicles(data.tbl_vehicles)
      ));
  }

  shouldComponentUpdate(nextProps) {
    return (nextProps.vehicles !== this.props.vehicles);
  }

  render() {
    if (this.props.isLoading) {
      return <p>...loading</p>
    }

    return (
      <div className="filter">
        <div className="filter__list">
          {this.props.vehicles.map(vehicle => (
            <FilterItem key={vehicle.id}
                        title={vehicle.title}
                        onChange={() => {this.props.updateHiddenVehicles(vehicle.vehicleUniqueId);}}/>
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps({Filter}) {
  return {...Filter}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({loadVehicles, updateHiddenVehicles}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
