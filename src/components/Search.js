import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Search.css';
import axios from 'axios';

class Search extends Component {
  constructor(props) {
    super(props);


    this.state = {
      allMovies: [],
    };  

    console.log(props.cardsList);
  }

// TODO: Instead of loading the api on mount, call it the api when you enter into 
// an input box. Or click a button. Pass the value into the api.
  componentDidMount () {
    const query = 'harry potter';
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=ecf2c105ca9b748583ff93bf7cbfd7b1&query=searchTerm')
      .then((response) => {
        console.log(response.data.results);
         this.setState({
          allMovies: response.data.results,
        });
      })
      .catch((error) => {
      this.setState({error: error.message})});
  }

  // render() {
  //   return (
  //     <div>
  //   <h3>Search</h3>
  //     </div>
  //   );
  // }
  searchChangeCallback = (event) => { 
    const value = event.target; 
    console.log(value)
    this.setState({
      searchTerm : value
    })
  }

// // render filtered list of movies using map?
// return movies.search.results.map () =>


  render() {
    return (
      <section>
        <div>
          <label className="search--label" htmlFor="search">Search For Movies</label>
        </div>
        <input
          onChange={(event) => { this.props.searchChangeCallback(event.target.value) }}
          value={this.props.searchTerm}
          name="search"
          id="search"
          className="search"
        />
      </section>
    );
  }
}


Search.propTypes = {
  searchChangeCallback: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default Search;