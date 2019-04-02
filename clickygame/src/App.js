import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
import Jumbotron from "./components/Jumbotron";
// import Navbar from "./components/Navbar";
// import Counter from "./components/Counter";
import  images from "./images.json";

function shuffleImages(arr){
  for (let i = arr.length - 1; i > 0; i--) {
    let c = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[c]] = [arr[c], arr[i]];
  }
  return arr;
};
class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    images,
    count: 0,
    highscore: 0,
    message: "",
    clickedImg: []
  };

  
  handleClick =  (id, event) => {
    
    if (this.state.clickedImg.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clickedImg: this.state.clickedImg.concat(id) });
    }else {
      this.handleReset();
    } 
    
  }
  handleReset = () => {
    this.setState({
      count: 0,
      highScore: this.state.highScore,
      message: "You already clicked that! Lets try again!",
      clickedImg: []
    });
    this.handleShuffle();
  };
  handleShuffle = () => {
    let shuffledImages = shuffleImages(images);
    this.setState({ images: shuffledImages });
  };

  handleIncrement = id => {
    // We always use the setState method to update a component's state
    const newScore = this.state.count + 1;
    this.setState({
      count: newScore,
      message: ""
    });
    if (newScore >= this.state.highScore) {
      this.setState({ highScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ message: "You win!" });
    }
    this.handleShuffle();
  };
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <div>
        <nav className="navbar navbar-dark bg-dark navbar-fixed-top">
            <a className="navbar-brand" href="/"> Clicky Game</a>
            <span className="navbar-brand mb-0 h1">{this.state.message}</span>
            <span className="navbar-brand mb-0 h1">Score: {this.state.count} | Top Score:{this.highScore}</span> 
        </nav>
        </div>
       <Jumbotron/> 
      <Wrapper>
        
        
        {this.state.images.map(image => (
          <ImageCard
            id={image.id}
            key={image.id}
            name={image.name}
            image={image.image}
            handleIncrement={this.handleIncrement}
            shuffleImages={this.shuffleImages}
            handleClick={this.handleClick}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
