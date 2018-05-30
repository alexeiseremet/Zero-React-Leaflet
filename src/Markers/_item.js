import React from 'react';
import {divIcon} from 'leaflet';
import {Marker as Point, Popup} from 'react-leaflet';
import MarkerPopup from './_popup';

function MarkersItem({vehicle}) {
  const position = [+vehicle.latitude, +vehicle.longitude];
  const icon = `<i class="icon ${+vehicle.speed === 0 ? 'icon--warning' : null}"
                      style="transform: rotate(${vehicle.angle}deg); -webkit-transform: rotate(${vehicle.angle}deg)"></i>`;

  return (
    <Point position={position} icon={divIcon({html: icon})}>
      <Popup>
        <MarkerPopup vehicle={vehicle}/>
      </Popup>
    </Point>
  );
}

export default MarkersItem
