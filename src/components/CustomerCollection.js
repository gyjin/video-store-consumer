import React from 'react';
import Customer from './Customer';
import axios from 'axios';

class CustomerCollection extends React.Component {
  constructor(props) {
    super(props);
  }

  setCustomer = (customer) => {
    this.props.setCustomerCallback(customer);
  }

  makeCollection () {
    const customerCollection = this.props.customers.map((customer, i) => {
      return <Customer
        name={customer.name}
        customerId={customer.id}
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
    
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Account Credit</th>
              <th scope="col">Number of Movies Checked Out</th>
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

export default CustomerCollection;