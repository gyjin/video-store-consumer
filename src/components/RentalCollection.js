import React from 'react';
import Rental from './Rental';

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
      <h3>Overdue rentals</h3>
      <ul>
        {this.makeCollection()}
      </ul>
      </div>
    );
  }
};

export default RentalCollection;