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
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=ecf2c105ca9b748583ff93bf7cbfd7b1&query=' + query)
      .then((response) => {
        console.log(response.data.results);
         this.setState({
          allMovies: response.data.results,
        });
      })
      .catch((error) => {
      this.setState({error: error.message})});
  }

  render() {
    return (
      <div>
    <h3>Search</h3>
      </div>
    );
  }
}

Search.propTypes = {
};

export default Search;