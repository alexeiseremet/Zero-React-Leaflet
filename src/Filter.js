import React, {Component} from 'react';

function Filter(props) {
  const list = [];

  props.vehicles.map(vehicle => {
    const item =
      <FilterItem key={vehicle.id}
                  data={{title: vehicle.title, uid: vehicle.vehicleUniqueId}}
                  updateHiddenVehicles={props.updateHiddenVehicles}/>;
    list.push(item);
  });

  return (
    <div className="filter">
      <div className="filter__list">{list}</div>
    </div>
  );
}

function FilterItem (props) {
  return (
    <label>
      <input type="checkbox" defaultChecked={true}
             onChange={() => props.updateHiddenVehicles(props.data.uid)}/>
      <i>{props.data.title}</i>
    </label>
  )
}

export default Filter
