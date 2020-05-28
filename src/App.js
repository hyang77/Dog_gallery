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
      breed: "Husky",
    };
    this.handleUpdateImage = this.handleUpdateImage.bind(this);
    this.handleChangeBreed = this.handleChangeBreed.bind(this);
  }
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <div className="container">
            <div className="jumbotron">
              <h1 className="display-4">{this.state.breed} Dog Gallery</h1>
              <p className="lead">Welcome to my favorite dog gallery!</p>
              <BreedSelect onChange={this.handleChangeBreed} />
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

  handleChangeBreed(evt) {
    this.setState({ breed: evt.target.value });
    if (evt.target.value === "Husky") {
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
    } else if (evt.target.value === "Shiba") {
      fetch("https://dog.ceo/api/breed/shiba/images/random")
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          this.setState({
            featuredImage: json,
          });
        });

      fetch("https://dog.ceo/api/breed/shiba/images/random/18")
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          this.setState({
            imageGrid: json,
          });
        });
    } else {
      fetch("https://dog.ceo/api/breed/retriever/images/random")
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          this.setState({
            featuredImage: json,
          });
        });

      fetch("https://dog.ceo/api/breed/retriever/images/random/18")
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          this.setState({
            imageGrid: json,
          });
        });
    }
  }

  handleUpdateImage(evt) {
    var featuredImage = { ...this.state.featuredImage };
    featuredImage.message = evt.target.src;
    this.setState({ featuredImage });
  }
}

export default App;
