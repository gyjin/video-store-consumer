import React from 'react';
import PropTypes from 'prop-types';

const Movie = (props) => {

  const selectMovie = () => {
    props.selectMovieCallback(props);
  }

  return (
    <tr>
      <td>{props.title}</td>
      <td>{props.overview}</td>
      <td>{props.releaseDate}</td>
      <td><button onClick={ selectMovie }>Select this movie</button></td>
    </tr>
  );
};

Movie.propTypes = {
  selectMovieCallback: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  externalId: PropTypes.number.isRequired,
};

export default Movie;