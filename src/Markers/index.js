import React from 'react';
import MarkersItem from './_item';

function Markers({vehicles}) {
  return (
    vehicles.map((vehicle, i) => (
      <MarkersItem key={i} vehicle={vehicle}/>
    ))
  )
}

export default Markers
