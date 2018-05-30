import React, {Component} from 'react';
import FilterItem from './_item';

class Filter extends Component {
  shouldComponentUpdate(nextProps) {
    return (nextProps.vehicles !== this.props.vehicles);
  }

  render() {
    return (
      <div className="filter">
        <div className="filter__list">
          {this.props.vehicles.map(vehicle => (
            <FilterItem key={vehicle.id}
                        title={vehicle.title}
                        onChange={() => this.props.updateHiddenVehicles(vehicle.vehicleUniqueId)}/>
          ))}
        </div>
      </div>
    )
  }
}

export default Filter
