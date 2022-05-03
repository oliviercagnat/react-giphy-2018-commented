import React, { Component } from 'react';

class Gif extends Component {
  render() {
    // The ID is not a static information
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} alt="" className="gif" />
    );
  }
}

export default Gif;
