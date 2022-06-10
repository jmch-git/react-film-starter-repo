import React, { Component } from "react"
import Poster from "./Poster"


export default class FilmRow extends Component {
    render() {
        let releaseDate = this.props.film.release_date
        console.log("DATE: ", releaseDate)
        // let year = releaseDate.getFullYear()
        return (
            <div class="film-row">
                <Poster 
                    urlKey={this.props.film.poster_path}
                    title={this.props.film.title}
                />
                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{this.props.film.release_date}</p>
                </div>
            </div>
        )
    }
}