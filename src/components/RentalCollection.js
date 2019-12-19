import React from 'react';
import Rental from './Rental';
import axios from 'axios';

class RentalCollection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rentals: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/rentals/overdue')
      .then((response) => {
        this.setState({rentals: response.data})
      })
      .catch((error) => {
        this.setState({error: error.message})
      })
  }

  makeCollection () {
    const rentalCollection = this.state.rentals.map((rental, i) => {
      return <Rental
        customerId={rental.customer_id}
        movieId={rental.movie_id}
        checkoutDate={rental.checkout_date}
        dueDate={rental.due_date}
        returned={rental.returned}
        key={i}
      />;
    }
    );
    return rentalCollection;
  }

  printRentals = () => {
    if (this.state.rentals.length === 0) {
      return "There are no rentals."
    } else {
      return this.state.rentals
    };
  }

  // newRental = (props) => {
  //   const params = {
  //     customer_id: props.customer.id,
  //     due_date: "today"
  //   };
  //   axios.post("http://localhost:3000/rentals/" + `${props.movie.title}` + "/check-out", params)
  //     .then(response => {
  //       console.log("successfully made a rental")
  //     })
  //     .catch(error => {
  //       console.log("failed to make a rental")
  //     });
  // };

  render () {
    return (
      <div>
      <h3>All rentals</h3>
      <ul>
        {this.printRentals()}
      </ul>
      </div>
    );
  }
};

export default RentalCollection;