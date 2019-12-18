import React from 'react';
import PropTypes from 'prop-types';

const Movie = (props) => {

  const selectMovie = () => {
    props.selectMovieCallback(props);
  }

    return (
      <li>
        {props.title} 
        <button onClick={ selectMovie }>Select this movie</button>
      </li>
    );
};

export default Movie;