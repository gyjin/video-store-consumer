import React from 'react';
import Movie from './Movie';

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

        <table class="table">
          <thead>
            <tr>
              <th scope="col" width="15%">Title</th>
              <th scope="col" width="50%">Overview</th>
              <th scope="col">Release Date</th>
              <th scope="col"></th>
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

export default MovieCollection;