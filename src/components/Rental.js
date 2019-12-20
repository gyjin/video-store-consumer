import React from 'react';
import PropTypes from 'prop-types';

const Rental = (props) => {

  return (
    <tr>
      <td>{props.customerName}</td>
      <td>{props.movieTitle}</td>
      <td>{props.dueDate}</td>
      <td>{props.checkoutDate}</td>
    </tr>
  );
};

Rental.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  customerId: PropTypes.number.isRequired,
  customerName: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  checkoutDate: PropTypes.string.isRequired,
};

export default Rental;
