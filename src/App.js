import React from "react";
import FeaturedImage from "./Components/FeaturedImage";
import ImageGrid from "./Components/ImageGrid";
import BreedSelect from "./Components/BreedSelect";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <div className="container">
          <div className="jumbotron">
            <h1 className="display-4">Dog Gallery</h1>
            <p className="lead">ITMD-565 -hyang77@hawk.iit.edu</p>
            <BreedSelect />
          </div>
        </div>
      </div>
      <FeaturedImage />
      <ImageGrid />
    </React.Fragment>
  );
}

export default App;
