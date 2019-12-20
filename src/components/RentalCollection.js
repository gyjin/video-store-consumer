import React from 'react';
import Rental from './Rental';
import PropTypes from 'prop-types';

class RentalCollection extends React.Component {
  constructor(props) {
    super(props);
  }

  makeCollection () {
    if (this.props.rentals.length === 0) {
      return "There are no overdue rentals."
    }

    const rentalCollection = this.props.rentals.map((rental, i) => {
      return <Rental
        movieTitle={rental.title}
        customerId={rental.customer_id}
        customerName={rental.name}
        dueDate={rental.due_date}
        checkoutDate={rental.checkout_date}
        key={i}
      />;
      }
    );

    return rentalCollection;
  }

  render () {
    return (
      <div>
      <h3>All Overdue Rentals</h3>

      <table class="table table-hover">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Movie</th>
            <th scope="col">Due Date</th>
            <th scope="col">Check-out Date</th>
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

RentalCollection.propTypes = {
  rentals: PropTypes.array.isRequired,
};

export default RentalCollection;