import React, { Component } from 'react';
import axios from 'axios';

export class Library extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      error: '',
    };
  }

  componentDidMount() {
    const movies = 'http://localhost:3000/movies'
    axios.get(movies).then((response) => {
      this.setState({
        movies: response.data,
      });
    })
    .catch((error) => {
      this.setState({ error: error.message });    
    });
  }

  
  render() {
    const movieInfo = this.state.movies.map((movie, i) => {
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