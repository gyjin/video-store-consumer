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
import OverdueRentals from './components/OverdueRentals';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      selectedCustomer: '',
      selectedMovie: '',
      overdueRentals: '',
    };    
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

  setOverdueRentalsCallback = (rentals) => {
    this.setState({
      overdueRentals: rentals
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
              <Link to="/overduerentals">Overdue Rentals</Link>
            </li>
          </ul>
          <p>Selected customer: {this.state.selectedCustomer.name}</p>
          <p>Selected movie: {this.state.selectedMovie.title}</p>

          <p>
            Rent this movie to this costumer:
          </p>

        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/search">
            <Search
              searchChangeCallback={this.searchChangeCallback}
              searchTerm={this.state.searchTerm}
            />
          </Route>

          <Route path="/library">
            <MovieCollection
            setMovieCallback={this.setMovieCallback}
            />
          </Route>

          <Route path="/customers">
            <CustomerCollection 
              setCustomerCallback={this.setCustomerCallback}
            /> 
          </Route>

          <Route path="/overduerentals">
            <OverdueRentals 
            /> 
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
    );
  }
}

function Home() {
  return <h2>This is home page</h2>;
}

export default App;


