import React, { Component } from 'react';

class Gif extends Component {
  // When handleClick is called,
  // we call the function from App selecGif and pass
  // the id as props.
  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  };

  render() {
    // The ID is not a static information
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
