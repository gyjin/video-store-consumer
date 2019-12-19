import React from 'react';
import PropTypes from 'prop-types';

const Rental = (props) => {

  return (
    <li>
      Customer name: {props.customerName}<br />
      Movie: {props.movieTitle} <br />
      Due Date: {props.dueDate} 
    </li>
  );
};

export default Rental;
