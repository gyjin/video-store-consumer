import React from 'react';
import Customer from './Customer';
import axios from 'axios';

class CustomerCollection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      customers: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/customers')
      .then((response) => {
        this.setState({customers: response.data})
      })
      .catch((error) => {
        this.setState({error: error.message})
      })
  }

  setCustomer = (customer) => {
    this.props.setCustomerCallback(customer);
  }

  makeCollection () {
    const customerCollection = this.state.customers.map((customer, i) => {
      return <Customer
        name={customer.name}
        registeredAt={customer.registered_at}
        address={customer.address}
        city={customer.city}
        state={customer.state}
        postal_code={customer.postal_code}
        phone={customer.phone}
        accountCredit={customer.account_credit}
        moviesCheckedOutCount={customer.movies_checked_out_count}
        selectCustomerCallback={this.props.setCustomerCallback}
        key={i}
      />;
    }
    );

    return customerCollection;
  }

  render () {
    return (
      <div>
      <h3>Customers</h3>
      <ul>
        {this.makeCollection()}
      </ul>
      </div>
    );
  }
};

export default CustomerCollection;