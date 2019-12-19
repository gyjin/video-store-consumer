import React from 'react';
import PropTypes from 'prop-types';

const Customer = (props) => {

  const selectCustomer = () => {
    props.selectCustomerCallback(props);
  }

  return (
    <li>
      {props.name} 
      <button onClick={ selectCustomer }>Select this customer</button>
    </li>
  );
};

export default Customer;