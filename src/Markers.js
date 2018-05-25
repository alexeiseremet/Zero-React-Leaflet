import React, {Component} from 'react';
import {divIcon} from 'leaflet';
import {Marker, Popup} from 'react-leaflet';
import Cluster from 'react-leaflet-markercluster';

function Markers(props) {
  return (
    <Cluster>
      <MarkerList data={props.vehicles}/>
    </Cluster>
  );
}

function MarkerList(props) {
  const markers = [];

  props.data.map(vehicle => {
    const icon = `<i class="icon ${vehicle.speed == 0 ? 'icon--warning' : null}"
                      style="transform: rotate(${vehicle.angle}deg); -webkit-transform: rotate(${vehicle.angle}deg)"></i>`;

    /** Create Popup markup */
    const popupMarkup = () => {
      let tempString = '';

      for (let key in vehicle) {
        tempString += `<li><b>${key}:</b> ${vehicle[key]}</dt>`;
      }

      return {__html: tempString};
    };

    const marker = (
      <Marker key={vehicle.id}
              position={[+vehicle.latitude, +vehicle.longitude]}
              icon={divIcon({html: icon})}>
        <Popup>
          <ul className="list" dangerouslySetInnerHTML={popupMarkup()}></ul>
        </Popup>
      </Marker>
    );

    markers.push(marker);
  });

  return markers;
}

export default Markers
