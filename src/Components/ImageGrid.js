import React from "react";
import "./style.css";

function ImageGrid(props) {
  return (
    <div className="container grid-container">
      {props.imageGrid.message.map((image) => {
        return (
          <div className="grid-items" key={image.toString()}>
            <img onClick={props.onClick}  src={image} alt="" />
          </div>
        );
      })}
    </div>
  );
}

export default ImageGrid;
