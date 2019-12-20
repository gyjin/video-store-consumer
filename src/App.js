import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Search from './components/Search';
import CustomerCollection from './components/CustomerCollection';
import MovieCollection from './components/MovieCollection';
import RentalCollection from './components/RentalCollection';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      selectedCustomer: '',
      selectedMovie: '',
      makeRentalError: '',
      movies: [],
      rentals: [],
      movieError: '',
      rentalError: '',
      newRentalError: '',
      successRental: '',
    };    
  }

  componentDidMount() {
    const movies = 'http://localhost:3000/movies'
    axios.get(movies).then((response) => {
      this.setState({
        movies: response.data,
      });
    })
    .catch((error) => {
      this.setState({ movieError: error.message });    
    });

    const rentals = 'http://localhost:3000/rentals/overdue'
    axios.get(rentals).then((response) => {
      this.setState({rentals: response.data});
    })
    .catch((error) => {
      this.setState({rentalError: error.message}); 
    });
  }

  setCustomerCallback = (customer) => {
    this.setState({
      selectedCustomer: customer
    });
  }

  searchChangeCallback = (searchTerm) => {
    this.setState({
      searchTerm: searchTerm
    });
  }

  setMovieCallback = (movie) => {
    this.setState({
      selectedMovie: movie
    });
  }

  makeRental = () => {
    console.log("make rental");
    let error;
    if (this.state.selectedCustomer === '') {
      error = "You must select a customer to check-out."
      this.setState({makeRentalError: error});
    } else if (this.state.selectedMovie === '') {
      error = "You must select a movie to check-out." 
      this.setState({makeRentalError: error});
    } else {
      error = '';
      this.setState({makeRentalError: error});
      let date = new Date()
      let params = {
        customer_id: this.state.selectedCustomer.customerId,
        due_date: date
      };

      axios.post('http://localhost:3000/rentals/' + `${this.state.selectedMovie.title}` + '/check-out', params)
      .then((response) => {
        this.setState({successRental: 'Successfully checked-out.'})
      })
      .catch((error) => {
        this.setState({newRentalError: error.message})
      });
    }
  }

  addMovieToLibraryCallback = (movie) => {
    console.log('added movie');
    console.log(movie);
    this.setState({movies: [...this.state.movies, movie]
      // appends movie to array movies
    });
  }

  render() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/library">Library</Link>
            </li>
            <li>
              <Link to="/customers">Customers</Link>
            </li>
            <li>
              <Link to="/rentals">Overdue Rentals</Link>
            </li>
          </ul>
          <p>Selected customer: {this.state.selectedCustomer.name}</p>
          <p>Selected movie: {this.state.selectedMovie.title}</p>

          <p>
            Rent this movie to this customer: {this.state.makeRentalError} <button onClick={this.makeRental}>Make rental</button>
            {this.state.successRental}
          </p>

        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div class="container">
        <Switch>
          <Route path="/search">
            <Search
              searchChangeCallback={this.searchChangeCallback}
              searchTerm={this.state.searchTerm}
              addMovieToLibraryCallback={this.addMovieToLibraryCallback}

            />
          </Route>

          <Route path="/library">
            <MovieCollection
            setMovieCallback={this.setMovieCallback}
            movies={this.state.movies}
            />
          </Route>

          <Route path="/customers">
            <CustomerCollection 
              setCustomerCallback={this.setCustomerCallback}
            /> 
          </Route>

          <Route path="/rentals">
            <RentalCollection 
            rentals={this.state.rentals}
            /> 
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
        </div>
      </div>
    </Router>
    );
  }
}

function Home() {
  return <div>
    <h2>Welcome to the best movie site ever...</h2>
    <iframe src="https://giphy.com/embed/jpQkuoHi7JZY14yIZf" width="400" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/pepsi-love-romance-cola-occasions-jpQkuoHi7JZY14yIZf">via GIPHY</a></p>
  </div>;
}

export default App;


