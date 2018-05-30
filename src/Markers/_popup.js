import React from 'react';

function MarkerPopup({vehicle}) {
  let list = [];

  for (const prop in vehicle) {
    const item = <li key={prop}><b>{prop}:</b> {vehicle[prop]}</li>;
    list.push(item);
  }

  return (
    <ul className="list">{list}</ul>
  );
}

export default MarkerPopup
