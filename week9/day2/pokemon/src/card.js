import React, { Component } from "react";

class Card extends Component {
  state = {
    flipped: false,
  };

  flipFunction = () => {
    this.setState({
      flipped: !this.state.flipped,
    });
  };
  render() {
    const { flipped } = this.state;
    const { name, hp, sprites } = this.props.pokemon;
    return (
      <div className="poke-card">
        <img src={flipped ? sprites.back : sprites.front} alt="" />

        <p>{name.toUpperCase()}</p>
        <p>HP: {hp}</p>
        <button onClick={this.flipFunction}>Flip</button>
        <button>Delete</button>
      </div>
    );
  }
}

export default Card;