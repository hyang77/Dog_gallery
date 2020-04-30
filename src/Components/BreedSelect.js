import React from "react";

function BreedSelect() {
  return (
    <React.Fragment>
      <label>Select Breed: </label>
      <select id="breeds">
        <option value="husky">Husky</option>
        <option value="golden retriever">Golden Retriever</option>
        <option value="shiba">Shiba</option>
      </select>
    </React.Fragment>
  );
}

export default BreedSelect;
