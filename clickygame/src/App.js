import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
import Jumbotron from "./components/Jumbotron";
// import Navbar from "./components/Navbar";
// import Counter from "./components/Counter";
import  images from "./images.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    images,
    count: 0
  };

  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <div>
        <nav className="navbar navbar-dark bg-dark navbar-fixed-top">
            <a className="navbar-brand" href="#"> Clicky Game</a>
            <span class="navbar-brand mb-0 h1">Click an image to begin!</span>
            <span class="navbar-brand mb-0 h1">Score: {this.state.count} | Top Score:</span> 
        </nav>
        </div>
       <Jumbotron/> 
      <Wrapper>
        
        {/* <Title>Clicky Game</Title> */}
        {this.state.images.map(image => (
          <ImageCard
            id={image.id}
            key={image.id}
            name={image.name}
            image={image.image}
            
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
