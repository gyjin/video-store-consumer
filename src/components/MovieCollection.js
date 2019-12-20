import React from 'react';
import Movie from './Movie';
import PropTypes from 'prop-types';

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
      <h3>All Movies</h3>

        <table class="table table-hover">
          <thead class="thead-dark">
            <tr>
              <th scope="col" width="15%">Title</th>
              <th scope="col">Overview</th>
              <th scope="col" width="20%">Release Date</th>
              <th scope="col" width="25%"></th>
            </tr>
          </thead>
          <tbody>
            {this.makeCollection()}
          </tbody>
        </table>

      </div>
    );
  }
};

MovieCollection.propTypes = {
  setMovieCallback: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
};

export default MovieCollection;