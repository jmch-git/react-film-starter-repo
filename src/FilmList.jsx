import React, { Component } from "react";
import FilmRow from "./FilmRow";

export default class Filmlist extends Component {
  render() {
    let allFilms = this.props.films.map((film,i) => {
        return <FilmRow film={film}/>
    })

    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
            {allFilms}
      </div>
    );
  }
}
