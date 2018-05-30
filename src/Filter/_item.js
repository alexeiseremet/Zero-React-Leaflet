import React from 'react';

function FilterItem({title, onChange}) {
  return (
    <label>
      <input type="checkbox" defaultChecked={true} onChange={onChange}/>
      <i>{title}</i>
    </label>
  )
}

export default FilterItem
