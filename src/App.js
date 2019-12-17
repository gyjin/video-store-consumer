import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Search from './components/Search';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allMovies: [],
      rentedMovies: [],
    };    
  }

  // getAllSearchedMovies = (searchedMoviesArray) => {
  //   this.setState(allMovies: searchedMoviesArray);
  // }


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
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/library">
            <Library />
          </Route>
          <Route path="/customers">
            <Customers />
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


function Library() {
  return <h2>This is the library page</h2>;
}

function Customers() {
  return <h2>This is customers page</h2>;
}

function Home() {
  return <h2>This is home page</h2>;
}


export default App;

// / (home page)
// /search (movie search page: allows the user to search for a movie from the external API)
// /library (rental library page: lists movies in the rental library)
// /customers (customer list page: lists customers)
