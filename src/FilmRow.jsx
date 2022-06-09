import React, { Component } from "react"


export default class FilmRow extends Component {
    render() {
        return (
            <div class="film-row">
                <img src={`https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`} alt=""/>
                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{this.props.film.release_date}</p>
                </div>
            </div>
        )
    }
}