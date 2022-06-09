import React, { Component } from "react";
import "./App.css";
import Filmlist from "./FilmList";
import Details from "./Details";
import TMDB from "./TMDB";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="film-library">
          <Filmlist films={TMDB.films} />
          <Details films={TMDB.films} />
        </div>
      </div>
    );
  }
}

export default App;
