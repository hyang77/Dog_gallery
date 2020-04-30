import React from "react";
import FeaturedImage from "./Components/FeaturedImage";
import ImageGrid from "./Components/ImageGrid";
import BreedSelect from "./Components/BreedSelect";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      featuredImage: {
        message:
          "https://images.dog.ceo/breeds/hound-afghan/n02088094_5927.jpg",
        status: "success",
      },

      imageGrid: {
        message: [
          "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
          "https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg",
          "https://images.dog.ceo/breeds/hound-afghan/n02088094_1023.jpg",
          "https://images.dog.ceo/breeds/hound-afghan/n02088094_10263.jpg",
          "https://images.dog.ceo/breeds/hound-afghan/n02088094_10715.jpg",
          "https://images.dog.ceo/breeds/hound-afghan/n02088094_10822.jpg",
          "https://images.dog.ceo/breeds/hound-afghan/n02088094_10832.jpg",
          "https://images.dog.ceo/breeds/hound-afghan/n02088094_10982.jpg",
          "https://images.dog.ceo/breeds/hound-afghan/n02088094_11006.jpg",
          "https://images.dog.ceo/breeds/hound-afghan/n02088094_11172.jpg",
          "https://images.dog.ceo/breeds/hound-afghan/n02088094_11182.jpg",
          "https://images.dog.ceo/breeds/hound-afghan/n02088094_1126.jpg",
          "https://images.dog.ceo/breeds/hound-afghan/n02088094_1128.jpg",
          "https://images.dog.ceo/breeds/hound-afghan/n02088094_11432.jpg",
        ],
        status: "success",
      },
    };
  }
  render() {
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
        <FeaturedImage featuredImage={this.state.featuredImage} />
        <ImageGrid imageGrid={this.state.imageGrid} />
      </React.Fragment>
    );
  }
}

export default App;
