import React from 'react';
import PropTypes from 'prop-types';

const Customer = (props) => {

  const selectCustomer = () => {
    props.selectCustomerCallback(props);
  }

  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.phone}</td>
      <td>{props.accountCredit}</td>
      <td>{props.moviesCheckedOutCount}</td>
      <td><button onClick={ selectCustomer }>Select this customer</button></td>
    </tr>
  );
};

export default Customer;