import React from 'react';
import Movie from './Movie';
import axios from 'axios';

class MovieCollection extends React.Component {
  constructor(props) {
    super(props);

  }


  setMovie = (movie) => {
    this.props.setMovieCallback(movie);
  }

  makeCollection () {
    const movieCollection = this.props.movies.map((movie, i) => {
      return <Movie
        title={movie.title}
        overview={movie.overview}
        releaseDate={movie.release_date}
        imageUrl={movie.image_url}
        externalId={movie.external_id}
        selectMovieCallback={this.props.setMovieCallback}
        key={i}
      />;
    }
    );
    
    return movieCollection;
  }

  render () {
    return (
      <div>
      <h3>Movies</h3>
      <ul>
        {this.makeCollection()}
      </ul>
      </div>
    );
  }
};

export default MovieCollection;