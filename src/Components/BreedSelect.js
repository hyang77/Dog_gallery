import React from "react";

function BreedSelect(props) {
  return (
    <React.Fragment>
      <label>Select Breed: </label>
      <select onChange={props.onChange} id="breeds">
        
        <option defaultValue="Husky">Husky</option>
        <option value="Retriever">Retriever</option>
        <option value="Shiba">Shiba</option>
      </select>
    </React.Fragment>
  );
}

export default BreedSelect;
