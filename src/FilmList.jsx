import React, { Component } from "react";

export default class Filmlist extends Component {
  render() {
    let allFilms = this.props.films.map((film,i) => {
        return <div class="film-row"><h1>{film.title}</h1></div>
    })

    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
            {allFilms}
      </div>
    );
  }
}
