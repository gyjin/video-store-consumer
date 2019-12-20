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

export default Movie;