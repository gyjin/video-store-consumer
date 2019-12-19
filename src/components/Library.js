import React, { Component } from 'react';
import axios from 'axios';

export class Library extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
  
  render() {
    const movieInfo = this.props.movies.map((movie, i) => {
      return (
        <div>
          <img src={movie.image_url}></img>
          <h1>Title: {movie.title}</h1>
          <p>Id: {movie.id}</p>
          <p>Overview: {movie.overview}</p>
          <p>Release Date: {movie.release_date}</p>
          <p>External Id:{movie.external_id}</p>
        </div>
      )
    })


    return (
      <div>
        {movieInfo}
      </div>
    )
  }
}

export default Library