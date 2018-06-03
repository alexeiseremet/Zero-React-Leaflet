import React from 'react';
import {connect} from 'react-redux'
import Cluster from 'react-leaflet-markercluster';
import MarkersItem from './_item';
import './styles.css';

function Markers({activeVehicles}) {
  return (
    <Cluster>
      {
        activeVehicles.map((vehicle, i) => (
          <MarkersItem key={i} vehicle={vehicle}/>
        ))
      }
    </Cluster>
  )
}

function mapStateToProps({Filter}) {
  const {vehicles, hiddenVehicles} = Filter;

  return {
    activeVehicles: vehicles.filter(
      v => hiddenVehicles.indexOf(v.vehicleUniqueId) === -1
    )
  }
}

export default connect(mapStateToProps)(Markers)
