import React, { Component } from 'react';
import Gif from './Gif';
import GifList from './GifList';
import SearchBar from './SearchBar';
import giphy from 'giphy-api';

class App extends Component {

  constructor(props) {
    super(props);

    // information that will change
    this.state = {
      gifs: [],
      selectedGifId: "gG6OcTSRWaSis"
    };

    this.search("homer thinking");
  }

  search = (query) => {
    giphy('u2LuaagQGHrtLOmqEaHsBPgWuX7t8Ee0').search({
      q: query,
      rating: 'g',
      limit: 20
    }, (error, result) => {
      // array of data
      // need to update the state with this information
      // the "this" should refer to the exact same component
      // so we change to a arrow function
      this.setState({
        gifs: result.data
      });
    });
  };

  render() {
    // const gifs = [
    //   {id: "WuGSL4LFUMQU"},
    //   {id: "HuVCpmfKheI2Q"},
    //   {id: "u6uAu3yyDNqRq"},
    //   {id: "LmNwrBhejkK9EFP504"},
    //   {id: "5ntdy5Ban1dIY"},
    //   {id: "kHrKpJiCbOmkWD4xT9"}
    // ];

    return (
      <div>
        <div className="left-scene">
          {/* We pass in the searchBar the function search */}
          <SearchBar searchFunction={this.search}/>
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs}/>
        </div>
      </div>
    );
  }
}

export default App;
