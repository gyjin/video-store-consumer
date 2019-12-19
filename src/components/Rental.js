import React from 'react';
import PropTypes from 'prop-types';

const Rental = (props) => {

    return (
      <li>
        {props.customerId} 
        {props.movieId} 
      </li>
    );
};

export default Rental;
