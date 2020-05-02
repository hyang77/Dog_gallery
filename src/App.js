import React from "react";
import FeaturedImage from "./Components/FeaturedImage";
import ImageGrid from "./Components/ImageGrid";
import BreedSelect from "./Components/BreedSelect";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      featuredImage: {},

      imageGrid: {
        message: [],
        status: "",
      },
      breed: ["Husky", "Golden retriever", "Shiba"]
      
    };
    this.handleUpdateImage = this.handleUpdateImage.bind(this);
  }
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <div className="container">
            <div className="jumbotron">
              <h1 className="display-4">Dog Gallery</h1>
              <p className="lead">ITMD-565 -hyang77@hawk.iit.edu</p>
              <BreedSelect breed={this.state.breed}/>
            </div>
          </div>
        </div>
        <FeaturedImage featuredImage={this.state.featuredImage} />
        <ImageGrid
          onClick={this.handleUpdateImage}
          imageGrid={this.state.imageGrid}
        />
      </React.Fragment>
    );
  }

  componentDidMount() {
    fetch("https://dog.ceo/api/breed/husky/images/random")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.setState({
          featuredImage: json,
        });
      });

    fetch("https://dog.ceo/api/breed/husky/images/random/18")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.setState({
          imageGrid: json,
        });
      });
  }
  

  handleUpdateImage(evt) {
    var featuredImage = { ...this.state.featuredImage };
    featuredImage.message = evt.target.src;
    this.setState({ featuredImage });
  }
}

export default App;
