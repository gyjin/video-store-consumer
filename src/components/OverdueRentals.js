import React from 'react';
import Rental from './Rental';
import axios from 'axios';

class OverdueRentals extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      overdueRentals: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/rentals/overdue')
      .then((response) => {
        this.setState({overdueRentals: response.data})
      })
      .catch((error) => {
        this.setState({error: error.message})
      })
  }

  printOverdueRentals = () => {
    if (this.state.overdueRentals.length === 0) {
      return "There are no overdue rentals."
    } else {
      return this.state.overdueRentals
    };
  }

  render () {
    return (
      <div>
        <h3>Overdue Rentals</h3>
        <ul>
          {this.printOverdueRentals()}
        </ul>
      </div>
    );
  }
};

export default OverdueRentals;