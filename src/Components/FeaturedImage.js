import React from "react";
import "./style.css";

function FeaturedImage(props) {
  return (
    <div className="container">
      <div className="jumbotron">
        <img src={props.featuredImage.message} alt="Featured" />
      </div>
    </div>
  );
}

export default FeaturedImage;
