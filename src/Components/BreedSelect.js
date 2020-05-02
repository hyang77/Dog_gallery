import React from "react";

function BreedSelect(props) {
  return (
    <React.Fragment>
      <label>Select Breed: </label>
      <select id="breeds">
        <option value={props.breed[0]}>{props.breed[0]}</option>
        <option value={props.breed[1]}>{props.breed[1]}</option>
        <option value={props.breed[2]}>{props.breed[2]}</option>
      </select>
    </React.Fragment>
  );
}

export default BreedSelect;
